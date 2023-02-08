import { useState, useEffect } from 'react';

import "styles/global/global.css";

import type { AppProps } from 'next/app';

import { store, persistor } from 'store/store';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';

const App = ({ Component, pageProps }: AppProps) => {
    const [loading, setLoading] = useState(true);
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                    <MantineProvider
                        withGlobalStyles
                        withNormalizeCSS
                        theme={{ colorScheme, primaryColor: "violet", loader: 'oval' }}
                        >
                            {loading ? (<></>) : <Component {...pageProps} />}
                    </MantineProvider>
                </ColorSchemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;