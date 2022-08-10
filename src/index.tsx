import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './state/store'
import {Global} from './index.styles'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <HashRouter>
        <Provider store={store}>
            <Global/>
            <App/>
        </Provider>
    </HashRouter>
)

