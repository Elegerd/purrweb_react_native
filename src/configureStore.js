import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
import createRootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(createRootReducer(), enhancer);
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
}
