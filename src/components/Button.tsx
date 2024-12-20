import { ReactNode } from "react"

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'filter'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    isActive?: boolean;
    disabled?: boolean;
    className?: string;
    fullWidth?: boolean;
}

export default function Button({ 
    children, 
    onClick, 
    variant = 'primary',
    size = 'md',
    icon,
    isActive = false,
    disabled = false,
    className = '',
    fullWidth = false
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-full transition-all duration-200 font-medium'
    
    const variants = {
        primary: 'bg-yellow-500 text-white hover:bg-pink-500 disabled:bg-gray-300',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100',
        outline: 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white disabled:border-gray-300 disabled:text-gray-300',
        ghost: 'text-gray-600 hover:bg-gray-100 disabled:text-gray-300',
        filter: `border-2 ${isActive 
            ? 'border-pink-500 text-pink-500 bg-pink-50' 
            : 'border-gray-300 text-gray-600 hover:border-yellow-500 hover:text-yellow-500'
        }`
    }

    const sizes = {
        sm: 'text-sm px-3 py-1 gap-1',
        md: 'text-base px-4 py-2 gap-2',
        lg: 'text-lg px-6 py-3 gap-3'
    }

    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className={`
                ${baseStyles}
                ${variants[variant]}
                ${sizes[size]}
                ${fullWidth ? 'w-full' : ''}
                ${className}
            `}
        >
            {icon && <span className="inline-flex">{icon}</span>}
            {children}
        </button>
    )
}