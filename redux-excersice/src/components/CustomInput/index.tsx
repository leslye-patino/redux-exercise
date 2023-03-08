import React, { ReactNode } from 'react'
import { useCallback } from 'react'

interface CustomInputProps {
    inputName: string
    onInputChange: (inputName: string, value: string) => void
    labelText: string
    inputType: string
    hasError: boolean
    inputValue: string
}

export const CustomInput = ({
    inputName,
    onInputChange,
    labelText,
    inputType,
    hasError,
    inputValue,
}: CustomInputProps) => {
    const onFieldChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onInputChange(inputName, event.target.value)
        },
        [onInputChange, inputName],
    )

    return (
        <>
            <label>{labelText}</label>
            <input
                type={inputType}
                name={inputName}
                id={inputName}
                onChange={onFieldChange}
                value={inputValue}
            />
            {hasError && <p>{`Invalid value for "${labelText}".`}</p>}
        </>
    )
}
