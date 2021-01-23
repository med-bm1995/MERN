import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactReducer } from './reducers/contactReducer';
import thunk from 'redux-thunk'

const middleware=[thunk]

const store = createStore(contactReducer, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ));

  export default store