import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import storage from './store'
import 'semantic-ui-css/semantic.min.css'
import './App.css'


const store = storage()

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker()

/*
<Provider store={store()}>
Пробрасываем хранилище в компонент App в качестве props
*/
