import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import { createStore , applyMiddleware} from 'redux'
import { counter, addGUN, reduceGUN ,addGunAsync} from './index.redux'
const store = createStore(counter,applyMiddleware(thunk))

function render() {
	ReactDOM.render(<App store={store} addGUN={addGUN} reduceGUN={reduceGUN} addGunAsync={addGunAsync}/>, document.getElementById('root'));
}
render()
registerServiceWorker();

store.subscribe(render)