import React from 'react'
import styles from './TextArea.module.css';

interface TextAreaProps {
  label?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
  className
}) => {
  return (
    <div className={styles.textAreaContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        className={`${styles.textArea} ${className || ''}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
      />
    </div>
  )
}

export default TextArea