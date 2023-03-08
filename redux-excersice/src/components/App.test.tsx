import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import { initialState, StateContext } from '../constants'
import App from './App'
import { StateContextType } from '../types/context'

describe('App unit tests', () => {
    function renderComponentWithContext(
        initStateContextValue: typeof initialState,
    ) {
        return render(
            <StateContext.Provider value={initStateContextValue}>
                <App />
            </StateContext.Provider>,
        )
    }

    afterEach(() => {
        cleanup()
        jest.clearAllMocks()
    })
    //case only to ensure a correct instalation
    it('renders without crashing', () => {
        const { container } = render(<App />)
        expect(container).toBeTruthy()
    })

    // UseContext testing with RTL

    it('renders but setting values to the form', () => {
        const emptyFormValuesToContext = initialState
        renderComponentWithContext(emptyFormValuesToContext)
        expect(screen.getByDisplayValue(initialState.name)).toBeDefined()
    })
})
