import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store/configureStore';
import Home from './containers/home';
import Signup from './containers/signup';
import Authentication from './containers/authentication';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <div>
        <Route exact path="/" component={Authentication(Home)}/>
        <Route path="/signup" component={() => <Signup/>}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)