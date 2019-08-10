import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import { GlobalStyle } from './assets/common-styles';
import { ErrorBoundary } from './components/ErrorBoundary';

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <React.StrictMode>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
);
