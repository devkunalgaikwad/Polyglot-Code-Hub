import {IconType} from 'react-icons'

export interface boxProps{
    children :React.ReactNode;
    className ?: string;
}
export interface sideBarProps{
    children :React.ReactNode;
    className ?: string;
}

export interface SideBarItemProps {
    icon : IconType;
    label : string;
    active ?: boolean;
    href : string;
}

export interface HeaderProps {
    children : React.ReactNode;
    className ?: string;
}

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement>{}