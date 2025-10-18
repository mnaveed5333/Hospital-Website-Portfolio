import React from 'react'

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#0F172A] mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border border-[#E5E7EB] rounded-lg bg-[#FFFFFF] text-[#0F172A] placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : ''
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default Input
