import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../sagas';
import { rootSaga } from '../rootSaga';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const configureStore = initialState => {
  let store;
  const sagaMiddleware = createSagaMiddleware();
  store = createStore(
    reducers,
    initialState,
    process.env.NODE_ENV !== 'production' ? // eslint-disable-line
      composeEnhancers(
        applyMiddleware(sagaMiddleware)
      ) :
      applyMiddleware(sagaMiddleware)
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore();
