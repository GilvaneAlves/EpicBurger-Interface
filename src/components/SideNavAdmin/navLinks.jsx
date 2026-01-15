import { ListIcon, ListPlusIcon, ReceiptIcon } from "@phosphor-icons/react";


export const navLinks = [
    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/pedidos',
        icon: <ReceiptIcon size={24} />
    },
    {
        id: 2,
        label: 'Produtos',
        path: '/admin/produtos',
        icon: <ListPlusIcon size={24} />
    },
    {
        id: 3,
        label: 'Adicionar Produto',
        path: '/admin/novo-produto',
        icon: <ListIcon size={24} />
    },

];