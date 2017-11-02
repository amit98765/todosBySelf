import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import stores from './reducers';
import App from './components/App';


const store = createStore(stores);


const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));