import React from 'react'
import { useCallback } from 'react'


export const CustomInput =({inputName, onInputChange, labelText , inputType , hasError, inputValue})  => {

  const onFieldChange = useCallback(
    (event) => {
        onInputChange(inputName, event.target.value)
    },
    [onInputChange, inputName]
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

      {hasError && (
        <p>{`Invalid value for "${labelText}".`}</p>
      )}
    </>
  )
}