import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';

// Responsible for building redux store and rendering any children that are provided
export default ({children, initialState={}})=> {
    const store = createStore(reducers, initialState,applyMiddleware(reduxPromise))
    return (
      
        <Provider store={store}>
            {children}
        </Provider>
    );
};