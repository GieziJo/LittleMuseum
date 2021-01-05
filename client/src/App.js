import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/Main.jsx'
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" style={{marginBottom: 200}}>
          <AppNavbar />
          <Container>
            <Main />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
