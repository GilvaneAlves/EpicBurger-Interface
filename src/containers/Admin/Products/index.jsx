import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Container, EditButton } from "./styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProductImage } from "../Orders/styles";
import { PencilIcon, XCircleIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { formatPrice } from "../../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

export function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProducts() {
            try {
                const { data } = await api.get("/products");
                setProducts(data);
            } catch (error) {
                console.error("Erro ao carregar produtos", error);
            }
        }
        loadProducts();
    }, []);

    function isOffer(offer) {
        if (offer) return <CheckCircleIcon size={35} color="#61a120" />;
        return <XCircleIcon size={35} color="#cf3057" />;
    }

    function editProduct(product) {
        // Passa o produto via state para a página de edição
        navigate(`/admin/editar-produto`, { state: { product } });
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="products table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="center">Preço</TableCell>
                            <TableCell align="center">Produto em Oferta</TableCell>
                            <TableCell align="center">Imagem do Produto</TableCell>
                            <TableCell align="center">Editar Produto</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell component="th" scope="row">
                                    {typeof product.name === "object" ? product.name.name : product.name}
                                </TableCell>
                                <TableCell align="center">
                                    {formatPrice(typeof product.price === "object" ? product.price.value : product.price)}
                                </TableCell>
                                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                <TableCell align="center">
                                    <ProductImage src={product.url} alt={product.name} />
                                </TableCell>
                                <TableCell align="center">
                                    <EditButton onClick={() => editProduct(product)}>
                                        <PencilIcon />
                                    </EditButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
