import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from '../reducers/root.reducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root.saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const middlewares = [
        thunk, sagaMiddleware
    ];
    
    const enhancers = [
        applyMiddleware(...middlewares)
    ];
    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga);
    return store;
}


export default configureStore;