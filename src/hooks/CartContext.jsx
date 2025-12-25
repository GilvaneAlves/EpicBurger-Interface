import { useContext, createContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    // Carregar carrinho do localStorage ao iniciar
    useEffect(() => {
        const storedCart = localStorage.getItem("devburger:cartInfo");
        if (storedCart) {
            setCartProducts(JSON.parse(storedCart));
        }
    }, []);

    // Atualizar localStorage sempre que o carrinho mudar
    useEffect(() => {
        localStorage.setItem("devburger:cartInfo", JSON.stringify(cartProducts));
    }, [cartProducts]);

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((pdr) => pdr.id === product.id);

        if (cartIndex >= 0) {
            setCartProducts((prev) =>
                prev.map((item, index) =>
                    index === cartIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            const newProduct = { ...product, quantity: 1 };
            setCartProducts((prev) => [...prev, newProduct]);
        }
    };

    // LIMPAR CARRINHO
    const clearCart = () => {
        setCartProducts([]);
    };

    // REMOVER UM PRODUTO ESPECÍFICO
    const deleteProduct = (productId) => {
        setCartProducts((prev) =>
            prev.filter((item) => item.id !== productId)
        );
    };

    // AUMENTAR QUANTIDADE
    const increaseProduct = (productId) => {
        setCartProducts((prev) =>
            prev.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // DIMINUIR QUANTIDADE (E REMOVER SE CHEGAR A 1)
    const decreaseProduct = (productId) => {
        setCartProducts((prev) =>
            prev
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };
    // Cálculo do total do carrinho ---
    const cartTotalPrice = cartProducts.reduce((acc, product) => {
        return acc + product.quantity * product.price;
    }, 0);

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                putProductInCart,
                clearCart,
                deleteProduct,
                increaseProduct,
                decreaseProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }

    return context;
};
