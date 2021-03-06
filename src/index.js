import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import News from './components/news'
import Home from './home'
import About from './components/about'
import Login from './Auth'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'

import { createStore, applyMiddleware ,combineReducers} from 'redux'
import './config'

import { counter} from './index.redux'
import { auth } from './Auth.redux'
const reducer = combineReducers({a:counter,auth:auth})
const store = createStore(reducer , applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
  			<Switch>
  				{/* 只渲染命中的第一个router*/}
  				<Route path="/" exact component={Home}></Route>
	  			<Route path="/login" exact component={Login}></Route>
  			</Switch>
  	</BrowserRouter>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
