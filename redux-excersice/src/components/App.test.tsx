import { cleanup, render, screen } from '@testing-library/react'
import { DispatchContext, initialState, StateContext } from '../constants'
import { ComponentB } from './ComponentB'

describe('App unit tests', () => {
    const dispatch = jest.fn
    const renderComponentWithContext = async (
        initStateContextValue: typeof initialState,
    ) => {
        console.log(ComponentB)
        return render(
            <StateContext.Provider value={initStateContextValue}>
                <DispatchContext.Provider value={dispatch}>
                    <ComponentB />
                </DispatchContext.Provider>
            </StateContext.Provider>,
        )
    }

    afterEach(() => {
        cleanup()
        jest.clearAllMocks()
    })
    //case only to ensure a correct instalation
    it('renders without crashing', async () => {
        const { container } = await renderComponentWithContext({ name: '' })
        expect(container).toBeTruthy()
    })

    // UseContext testing with RTL
    it.skip('renders but setting values to the form', () => {
        const emptyFormValuesToContext = initialState
        renderComponentWithContext(emptyFormValuesToContext)
        expect(screen.getByDisplayValue(initialState.name)).toBeDefined()
    })
})
