import { combineReducers } from 'redux'
import commonReducer from './common/reducer'
import loginReducer from './login/reducer'

const rootReducer = combineReducers({
    commonReducer,
    loginReducer
})

export default rootReducer
