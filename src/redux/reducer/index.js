import { combineReducers } from 'redux'
import addContactReducer from './addContactReducer'

const rootReducer = combineReducers({
    addContactReducer: addContactReducer
})

export default rootReducer