// redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // Import `thunk` as a named import
import rootReducer from './reducers'; // Your root reducer

// Create store with middleware and Redux DevTools
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
