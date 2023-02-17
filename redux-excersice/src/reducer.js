/**
 * Reducer function
 * @param  state  The current state of the application
 * @param  action  The current state of the application
 * @return  {Updated State} Will return a updated state,
 * since JS obj Pass by ref we avoid manipulating the same state obj,
 * instead return a new state obj with updated values.
 */

export default function reducer(state, action) {
    const { type, payload } = action
    switch (type) {
        case 'CHANGE_NAME': {
            return {
                ...state,
                name: payload.name,
            }
        }
        case 'RESET': {
            return {
                ...state,
                name: '',
            }
        }
        default:
            return state
    }
}
