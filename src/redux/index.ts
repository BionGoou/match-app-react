import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
export default createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);