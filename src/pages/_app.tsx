import "styles/global/global.css";

import { useState } from 'react';

import { getCookie, setCookie } from 'cookies-next';

import NextNProgress from 'nextjs-progressbar';

import type { AppProps } from 'next/app';

import { store, persistor } from 'store/store';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { NotificationsProvider } from '@mantine/notifications';

import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell } from '@mantine/core';
import NavBar from "features/global/navigation/NavBar";

const App = (props: AppProps & { colorScheme: ColorScheme }) => {
    const { Component, pageProps } = props;
    const [colorScheme, setColorScheme] = useState<any>(getCookie('mantine-color-scheme') || "light");

    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
        setColorScheme(nextColorScheme);
        setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
    };

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                    <NotificationsProvider position="bottom-left" style={{width: 400}}>
                        <MantineProvider
                            withGlobalStyles
                            withNormalizeCSS
                            theme={{ colorScheme, primaryColor: "violet" }}
                        >
                            <NextNProgress color='#9775FA' height={3} showOnShallow={true} options={{ easing: 'ease', speed: 400, showSpinner: false }} />
                            <AppShell
                                padding="md"
                                navbar={<NavBar />}
                            >
                                <Component {...pageProps} />
                            </AppShell>
                        </MantineProvider>
                    </NotificationsProvider>
                </ColorSchemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;