import { useState } from 'react';

import "styles/global/global.css";

import type { AppProps } from 'next/app'

import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{ colorScheme, primaryColor: "violet" }}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </ColorSchemeProvider>
    );
}
