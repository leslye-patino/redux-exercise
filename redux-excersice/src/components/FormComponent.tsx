import React, { useCallback, useState } from 'react'
import { object, string, ref } from 'yup'

export const FormComponent = () => {
    const [values, setValues] = useState({
        name: '',
        password: '',
        confirm: '',
    })

    const [errors, setErrors] = useState({
        name: false,
        password: false,
        confirm: false,
    })

    const formSchema = object().shape({
        name: string().required(),
        password: string().required(),
        confirm: string()
            .oneOf([ref('password')], 'Passwords must match')
            .required(),
    })

    const onFieldChange = useCallback(
        (event: { target: { name: any; value: any } }) => {
            setValues({
                ...values,
                [event.target.name]: event.target.value,
            })
        },
        [values],
    )

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        const isFormValid = await formSchema.isValid(values, {
            abortEarly: false, // Prevent aborting validation after first error
        })

        if (isFormValid) {
            // If form is valid, continue submission.
            console.log('Pass')
        } else {
            // If form is not valid, check which fields are incorrect:
            formSchema.validate(values, { abortEarly: false }).catch((err) => {
                // Collect all errors in { fieldName: boolean } format:
                const errorsVAlidation = err.inner.reduce(
                    (acc: any, error: { path: any }) => {
                        return {
                            ...acc,
                            [error.path]: true,
                        }
                    },
                    {},
                )

                setErrors(errorsVAlidation)
            })
        }
    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input
                            value={values.name}
                            name="name"
                            onChange={onFieldChange}
                        />
                    </label>
                    {errors.name && (
                        <p className="error">{`Invalid value for name".`}</p>
                    )}
                    <label>
                        <p>Password: </p>
                        <input
                            value={values.password}
                            type="password"
                            name="password"
                            onChange={onFieldChange}
                        />
                    </label>
                    {errors.password && (
                        <p className="error">{`Invalid value for password".`}</p>
                    )}
                    <label>
                        <p>Confirm Password: </p>
                        <input
                            value={values.confirm}
                            type="password"
                            name="confirm"
                            onChange={onFieldChange}
                        />
                    </label>
                    {errors.confirm && (
                        <p className="error">{`Passwords must coincide.`}</p>
                    )}
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
