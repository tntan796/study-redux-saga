import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from '../reducers/root.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const middlewares = [
        
    ];
    
    const enhancers = [
        applyMiddleware(...middlewares)
    ];
    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    return store;
}

export default configureStore;