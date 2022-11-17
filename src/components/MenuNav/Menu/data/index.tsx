import React, { ReactNode } from 'react';
import { TbBrandProducthunt } from 'react-icons/tb';
import { TbReceipt } from 'react-icons/tb';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export interface SubItem {
    title: string,
    path: string,
    permission: string
};

export interface MenuItem {
    title: string,
    path: string,
    icon: ReactNode,
    permission?: string,
    subItems?: SubItem[]
};

export const menuData: MenuItem[] = [
    
    {
        title: 'Serviços',
        path: '/services',
        icon: <TbBrandProducthunt/>,
    },
    {
        title: 'Clientes',
        path: '/customers',
        icon: <BsFillPersonLinesFill/>,
    },
    {
        title: 'Agendamento',
        path: '/orders/register',
        icon: <TbReceipt/>,
    }
];




