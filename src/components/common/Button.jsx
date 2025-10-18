import React from 'react'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-[#16A34A] text-white hover:bg-[#15803d] focus:ring-[#16A34A]',
    secondary:
      'bg-[#06B6D4] text-white hover:bg-[#0891b2] focus:ring-[#06B6D4]',
    outline:
      'border border-[#E5E7EB] bg-transparent text-[#0F172A] hover:bg-[#F8FAFC] focus:ring-[#16A34A]'
  }

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
