import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

import  {store}  from './store/store.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BillProvider } from './components/BillComponent/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BillProvider>
    <App />
    </BillProvider>
    </Provider>
  </React.StrictMode>,
)
