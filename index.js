import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { render } from 'react-dom';
import Counter from './Counter';
import FormInput from './FormInput';
import store from './store/';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        hey!
        <Counter/>
        <br/>
        <FormInput />
      </Provider>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
