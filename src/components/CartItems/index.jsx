// src/components/CartItems/CartItems.jsx
import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { Table } from "../Table";
import { TrashImage } from "../Table/styles";
import TrashIcon from '../../assets/trash.svg';

import {
    ProductImage,
    QuantityControls,
    QuantityButton,
    EmptyCartMessageContainer,
    CartFooter,
    OrderTotalCell,
    OrderTotalPrice,
    TableTh,
    TableTd,
} from "./styles";

export function CartItems() {
    const { cartProducts, increaseProduct, decreaseProduct, cartTotalPrice, deleteProduct } = useCart();

    return (
        <Table.TableContainer>
            <Table.Root>
                <Table.Header>
                    <Table.Tr>
                        <TableTh small />
                        <TableTh large>Itens</TableTh>
                        <TableTh right>Preço</TableTh>
                        <TableTh center>Quantidade</TableTh>
                        <TableTh right>Total</TableTh>
                        <TableTh></TableTh>
                    </Table.Tr>
                </Table.Header>

                <Table.Body>
                    {cartProducts?.length ? (
                        cartProducts.map(product => (
                            <Table.Tr key={product.id}>
                                <TableTd>
                                    <ProductImage src={product.url} alt={product.name} />
                                </TableTd>
                                <TableTd left>{product.name}</TableTd>
                                <TableTd right>{formatPrice(product.price)}</TableTd>
                                <TableTd center>
                                    <QuantityControls>
                                        <QuantityButton onClick={() => decreaseProduct(product.id)}>
                                            -
                                        </QuantityButton>
                                        {product.quantity}
                                        <QuantityButton onClick={() => increaseProduct(product.id)}>+</QuantityButton>
                                    </QuantityControls>
                                </TableTd>
                                <TableTd right bold>
                                    {formatPrice(product.quantity * product.price)}
                                </TableTd>
                                <TableTd>
                                    <TrashImage src={TrashIcon} alt="Lixeira" onClick={() => { deleteProduct(product.id) }} />
                                </TableTd>
                            </Table.Tr>
                        ))
                    ) : (
                        <Table.Tr>
                            <TableTd colSpan="5">
                                <EmptyCartMessageContainer>Carrinho Vazio</EmptyCartMessageContainer>
                            </TableTd>
                        </Table.Tr>
                    )}
                </Table.Body>


            </Table.Root>
        </Table.TableContainer>
    );
}
