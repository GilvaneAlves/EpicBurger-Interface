import { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export function CheckoutForm() {
    const { cartProducts, clearCart } = useCart();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const location = useLocation();
    const dpmCheckerLink = location.state?.dpmCheckerLink ?? null;

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error("Stripe.js has not yet loaded.");
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: "if_required",
        });

        if (error?.message) {
            setMessage(error.message);
            toast.error(error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            try {
                const products = cartProducts.map(product => ({
                    id: product.id,
                    quantity: product.quantity,
                    price: product.price
                }));

                const { status } = await api.post(
                    "/orders",
                    { products },
                    { validateStatus: () => true }
                );

                if (status === 200 || status === 201) {
                    toast.success("Pedido Realizado com Sucesso!");

                    setTimeout(() => {
                        navigate(
                            `/complete-payment?payment_intent_client_secret=${paymentIntent.client_secret}`
                        );
                        clearCart();
                    }, 3000);
                } else if (status === 400) {
                    toast.error("Falha ao Realizar Pedido.");
                } else {
                    throw new Error();
                }
            } catch (err) {
                toast.error("Erro no servidor. Tente novamente mais tarde.");
            }
        }

        setIsLoading(false);
    };

    const paymentElementOptions = { layout: "accordion" };

    return (
        <div className="container">
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element" options={paymentElementOptions} />

                <button disabled={isLoading || !stripe || !elements} id="button-submit">
                    <span id="button-text">
                        {isLoading ? <div id="spinner"></div> : "Pagar Agora"}
                    </span>
                </button>

                {message && <div id="payment-message">{message}</div>}
            </form>
        </div>
    );
}
