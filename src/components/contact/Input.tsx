import React from 'react'

const Input = ({label, type, name, placeholder, value, onChange, required}: {label: string, type: string, name: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required: boolean}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />
    </div>
  )
}

export default Input