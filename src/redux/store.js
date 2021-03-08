import { createStore } from 'redux';
import { cat } from './reducers';

const initialState = {
    name: 'Tony',
    activity: 'napping',
}

export const store = createStore(
    cat,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);