'use client';

import clsx from 'clsx';

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type = "button",
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled,
})=> {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(` p-4 text-white text-sm font-bold tracking-[3px] rounded-xl mt-2 mb-2 w-[305px] shadow-md`,
            disabled && 'opacity-50 cursor-default',
            fullWidth && 'w-full',
            secondary ? 'text-gray-900' : 'text-white',
            danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
            !secondary && !danger && 'bg-pink-dark hover:bg-pink-darkLight focus-visible:outline-sky-600'
            )}>
                {children}
                </button>
    );
}

export default Button;