import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import rootReducer from './rootReducer';

const actionCreators = {

  push,
};


const router = routerMiddleware(hashHistory);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    actionCreators,
  }) :
  compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, router)
);

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(require('./rootReducer'))
    );
  }

  return store;
}
const store = configureStore();
export default store;

