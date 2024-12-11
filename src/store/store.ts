import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// api
import { configureAxios } from 'api/configureAxios';

// store
import reducers from './reducers';
import sagaMiddlewareRuns from './watchers';

// types
import { TStore } from './types';

const composeEnhancers = composeWithDevTools({
  trace: true,
});

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState = {}): TStore => {
  const store = createStore(
    reducers(),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  configureAxios();
  sagaMiddlewareRuns(sagaMiddleware);

  return store;
};

export const store = configureStore();
