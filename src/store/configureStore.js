import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'

 const configureStore = () => {

  const store = createStore(
    rootReducer, 
    composeEnhancers(
      applyMiddleware(thunkMiddleware)
    )
  )
  
  return store;
  }

 export default configureStore;
