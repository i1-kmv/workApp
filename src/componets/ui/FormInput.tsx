import React, {FC} from "react"

type FormInputPropsType = {
    label: string
    type: string
    name: string
    value: string
    onChange: (val: string) => void
    placeholder: string
}


export const FormInput:FC<FormInputPropsType> = ({label,placeholder, type,name,onChange, value}) => {
    return (
        <div className="input-wrapper">
            <input
                className="input-item"
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={(e) => onChange(e.currentTarget.value)}
                id={name}
            />
            <label
                htmlFor={name}
                className="input-label"
            >
                {label}
            </label>
        </div>
    )
}
