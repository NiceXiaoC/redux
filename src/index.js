import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import News from './components/news'
import About from './components/about'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom'



import { createStore, applyMiddleware } from 'redux'
import { counter} from './index.redux'
const store = createStore(counter, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
  		<ul>
  			<li>
  				<Link to="/">首页</Link>
  			</li>
  			<li>
  				<Link to="/about">About</Link>
  			</li>
  			<li>
  				<Link to="/news">News</Link>
  			</li>
  			<Switch>
  			{/* 只渲染命中的第一个router*/}
  			
  			<Route path="/" exact component={App}></Route>
  			<Route path="/:location" component={About}></Route>
  			<Route path="/news" component={News}></Route>
  			</Switch>
  			
  		</ul>
  	</BrowserRouter>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
