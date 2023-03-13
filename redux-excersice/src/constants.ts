import React from 'react'
import { StateContextType } from './types/context'
/**
 * lets create State and Dispatch Context
 * we are placing it in constants file so
 * that we can import from multiple components
 */

//Initial State of the Application
export const initialState: StateContextType = {
    name: '',
}

const initDispatch: React.Dispatch<any> = () => {}

export const StateContext = React.createContext(initialState)
export const DispatchContext = React.createContext(initDispatch)

// Enum for form input labels
export const QueryParams = {
    name: 'name',
}
