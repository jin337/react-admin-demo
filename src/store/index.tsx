import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import List from './modules/list'
import login from './modules/login'

const reducer = combineReducers({
  List,
  login
})

const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, composeWithDevTools(middleware))

export default store
