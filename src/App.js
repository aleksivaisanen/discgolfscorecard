import React from 'react';
import AddCourseView from './views/AddCourseView.js'
import MainMenuView from './views/MainMenuView.js'
import { createStore } from 'redux';
import { Provider } from 'react-redux' 

export default class App extends React.Component{   
    render() {
        //let store = createStore();
        return(
            //<Provider store = {store}>
                <MainMenuView/>
            //</Provider>
        );
    }
}