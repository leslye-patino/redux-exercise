import React, { useContext } from 'react'
import { StateContext, DispatchContext } from '../constants'
import { ComponentC } from './ComponentC'

export const ComponentB = () => {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const handleOnChangeEvent = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: event.target.value,
            },
        })
    }
    return (
        <div className="App">
            <input value={state.name} onChange={handleOnChangeEvent} />
            <ComponentC />
        </div>
    )
}
