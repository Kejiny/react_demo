import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ThemeProvider>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();