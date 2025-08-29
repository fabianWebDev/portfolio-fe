import React from 'react'
import styles from './Input.module.css';

const Input = ({label, type, name, placeholder, value, onChange, required = false}: {label?: string, type: string, name: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required?: boolean}) => {
  return (
    <div className={styles.inputContainer}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
            className={styles.input}
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