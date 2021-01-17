import React from 'react';
import { ApolloProvider } from '@apollo/client';
import createClient from './graphql/apolloClient';
import AppRouter from './router/StackNavigator';

const client = createClient();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}
