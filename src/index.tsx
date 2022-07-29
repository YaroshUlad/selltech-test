import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

const client = new ApolloClient({
  uri: 'http://152.228.215.94:83/api',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
);
