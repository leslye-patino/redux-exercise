import React, { useContext } from 'react'
import { StateContext, DispatchContext } from '../constants'
export const ComponentC = () => {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const handleReset = () => {
        dispatch({
            type: 'RESET',
        })
    }
    return (
        <div className="App">
            <p>{state.name}</p>
            <button onClick={handleReset}>Reset The text Area</button>
        </div>
    )
}
