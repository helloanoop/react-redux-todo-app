import "./style.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers';
import App from './components/App';

const store = createStore(rootReducer);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <h2>Todo App built using React & Redux</h2>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
