import React from 'react'

const FormGroup = ({ label, placeholder, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                type="text" id={label} name={label} placeholder={placeholder} required />
        </div>
    )
}

export default FormGroup