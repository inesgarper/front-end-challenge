import '$/styles/fonts.css';
import { Layout } from '$/containers/Layouts';
import { AudioPlayerProviderWrapper } from '$/context/audioPlayerContext';
import { FavsProviderWrapper } from '$/context/favsContext';
import client from '$/graphql';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <FavsProviderWrapper>
          <AudioPlayerProviderWrapper>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AudioPlayerProviderWrapper>
        </FavsProviderWrapper>
      </ThemeProvider>
    </ApolloProvider>
  );
}
