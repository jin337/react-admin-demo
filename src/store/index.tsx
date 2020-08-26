import { createStore, combineReducers } from 'redux'

import DemoList from './demo-list'
import List from './list'

const reducer = combineReducers({
  DemoList,
  List
})

const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, reduxDevTools)

export default store
