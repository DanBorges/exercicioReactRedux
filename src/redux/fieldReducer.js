
const INITIAL_STATE = { value: 'opa' }

export default function(state = INITIAL_STATE, action) {
    console.log('action', action)
    switch(action.type) {
        case 'VALUE_CHANGED':
            // state.value = action.payload ALTERA O ESTADO ATUAL
            console.log('certo')
            return { value: action.payload } // EVOLUI O ESTADO
        default:
            console.log('default')
            return state
    }
}