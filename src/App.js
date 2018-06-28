import React from 'react';
import MainMenuView from './views/MainMenuView.js'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

export let store = createStore(rootReducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MainMenuView />
            </Provider>
        );
    }
}