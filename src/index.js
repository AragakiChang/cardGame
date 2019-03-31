import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import GameField from './containers/gamefield'
import './style.less'

ReactDom.render(
    <Provider store={store}>
        <GameField />
    </Provider>,
    document.getElementById('root')
)
