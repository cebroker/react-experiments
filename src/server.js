import path from 'path';
import express from 'express';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import promise from 'redux-promise';
import { Router, hashHistory, match, RouterContext } from 'react-router';

import reducers from './reducers/index';
import HelloWorld from './components/HelloWorld';
import App from './components/App';
import routes from './routes';

const app = express();
const port = 3000;

// serve static assets
app.use(express.static(path.join(__dirname, 'public'), {index: false}));
// app.use('/public/images', express.static(path.join(__dirname, '../src/images')));
// app.use('/images', express.static(path.join(__dirname, 'src/images')));

app.get('*', handleRequest);

function handleRequest(req, res) {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      console.log(props.params);
      const store = createStore(
        reducers,
        applyMiddleware(promise)
      );

      const html = renderToString(
        <Provider store={store}>
          <RouterContext
            {...props}
            createElement={(Component, props) => {
              return <Component {...props} />;
            }} />
        </Provider>
      );

      const initialState = store.getState();

      res.send(renderFullPage(html, initialState));
    } else {
      res.status(404).send('Not Found');
    }
  });
}

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="" />
        <title>React Experiments</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,300" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_SATE__ = ${JSON.stringify(initialState)};
        </script>
        <script type="text/javascript" src="/bundle.js"></script>
     </body>
    </html>
  `;
}

app.listen(port, function() {
  console.log(`Express server running at http://localhost:${port}`);
});


