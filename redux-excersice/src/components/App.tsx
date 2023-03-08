import React, { useReducer } from 'react'
import reducer from '../reducer'
import { StateContext, DispatchContext, initialState } from '../constants'
import { useReadPath } from '../hooks/useReadPath'
import { FormComponent } from './FormComponent'
import './styles.css'

export default function App() {
    //lets use useReducer to get a state and dispatch

    const { name } = useReadPath()

    const initStateWithHref = () => {
        console.log(
            'initializing useReducer with name constant from useReadPath',
            name,
        )
        return {
            name,
        }
    }

    const [state, dispatch] = useReducer(
        reducer,
        initialState,
        initStateWithHref,
    )
    // onBlur event handler

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <div className="App">
                    <h1>useReducer and useContext Demo</h1>
                    <FormComponent />
                </div>
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}
