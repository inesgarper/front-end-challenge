import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-frontend-challenge.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
