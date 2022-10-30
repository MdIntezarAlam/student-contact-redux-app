import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

store.subscribe(() => console.log(store.getState()))


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
)
