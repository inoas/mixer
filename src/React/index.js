import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter, push } from 'react-router-redux'
import Promise from 'promise-polyfill'

import { App } from './components/App'
import { SearchView } from './views/SearchView'
import { HomeView } from './views/HomeView'
import { PluginView } from './views/PluginView'
import { store, history } from './store'

import './index.css'

if (!window.Promise) {
    window.Promise = Promise;
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App push={push}>
                <Route exact path="/" component={HomeView} />
                <Route path="/search" component={SearchView} />
                <Route path="/view/:owner/:repo" component={PluginView} />
            </App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

//<Route path="/about" component={About}/>
//<Route path="/topics" component={Topics}/>

//ReactDOM.render(
//  <App />,
//  document.getElementById('root')
//)