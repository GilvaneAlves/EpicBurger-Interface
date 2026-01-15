import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { OrderStatusOptions } from './orderStatus';
import { Filter, FilterOptions } from './styles';

export function Orders() {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [rows, setRows] = useState([]);
    const [activeStatus, setActiveStatus] = useState(0); // 0 = All orders

    // Carrega os pedidos da API
    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('/orders');
            setOrders(data);
            setFilteredOrders(data);
        }
        loadOrders();
    }, []);

    // Mapeia pedidos filtrados para linhas da tabela
    useEffect(() => {
        const newRows = filteredOrders.map(order => ({
            orderId: order._id,
            name: order.user.name,
            date: new Date(order.createdAt).toLocaleDateString(),
            status: order.status,
            products: order.products,
        }));
        setRows(newRows);
    }, [filteredOrders]);

    // Filtra pedidos por status e marca botão ativo
    function handleStatus(status) {
        setActiveStatus(status.id);

        if (status.id === 0) {
            setFilteredOrders(orders);
        } else {
            const filtered = orders.filter(order => order.status === status.value);
            setFilteredOrders(filtered);
        }
        setActiveStatus(status.id);
    }

    useEffect(() => {
        if (activeStatus === 0) {
            setFilteredOrders(orders);
        } else {
            const statusIndex = OrderStatusOptions.findIndex((item) => item.id === activeStatus);
            const newFilterOrder = orders.filter(order => order.status === OrderStatusOptions[statusIndex].value);
            setFilteredOrders(newFilterOrder);
        }
    }, [orders]);

    return (
        <>
            <Filter>
                {OrderStatusOptions.map(status => (
                    <FilterOptions
                        key={status.id}
                        onClick={() => handleStatus(status)}
                        $isactiveStatus={activeStatus === status.id}
                    >
                        {status.label}
                    </FilterOptions>
                ))}
            </Filter>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Pedido</TableCell>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Data do Pedido</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <Row
                                key={row.orderId}
                                row={row}
                                orders={orders}
                                setOrders={setOrders}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
