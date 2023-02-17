import React from 'react'
/**
 * lets create State and Dispatch Context
 * we are placing it in constants file so
 * that we can import from multiple components
 */
export const StateContext = React.createContext()
export const DispatchContext = React.createContext()

//Initial State of the Application
export const initialState = {
    name: '',
}
