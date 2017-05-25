
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './Reducers';
import LoginForm from './Components/LoginForm';


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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}


export default App;
