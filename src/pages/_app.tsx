import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import {  DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps, AppProps {
  emotionCache?: EmotionCache;
  session: Session
  pageProps: {
    dehydratedState: DehydratedState
  }
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, session } = props;
  const [queryClient] = useState(() => new QueryClient())
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}