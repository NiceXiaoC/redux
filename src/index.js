import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { counter, addGUN, reduceGUN } from './index.redux'
const store = createStore(counter)

function render() {
	ReactDOM.render(<App store={store} addGUN={addGUN} reduceGUN={reduceGUN}/>, document.getElementById('root'));
}
render()
registerServiceWorker();

store.subscribe(render)