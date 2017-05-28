
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // 3rd party needs applyMiddleware
import reducers from './Reducers';
import Router from './Router';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyA5XQJA5kSgnqJ1F6LGqkTF9EDHLxV_a18',
            authDomain: 'manager-a41be.firebaseapp.com',
            databaseURL: 'https://manager-a41be.firebaseio.com',
            projectId: 'manager-a41be',
            storageBucket: 'manager-a41be.appspot.com',
            messagingSenderId: '741606945576'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}


export default App;
