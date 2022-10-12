import { applyMiddleware, createStore,compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'

 const configureStore = () => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


  const store = createStore(
    rootReducer, 
    composeEnhancers(
    applyMiddleware(thunkMiddleware))
  );
  
  return store;
  }

 export default configureStore;
