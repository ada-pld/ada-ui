import "styles/global/global.css";

import { useEffect, useState } from 'react';

import { getCookie, setCookie } from 'cookies-next';

import NextNProgress from 'nextjs-progressbar';

import type { AppProps } from 'next/app';

import { store, persistor } from 'store/store';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Notifications } from '@mantine/notifications';

import { MantineProvider, ColorSchemeProvider, ColorScheme, AppShell, Burger } from '@mantine/core';
import NavBar from "features/global/navigation/NavBar";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import NavigationDrawer from "features/global/navigation/NavigationDrawer";
import { useRouter } from "next/router";

const App = (props: AppProps & { colorScheme: ColorScheme }) => {
    const { Component, pageProps } = props;
    const [colorScheme, setColorScheme] = useState<any>(getCookie('mantine-color-scheme') || "light");
    const [opened, { open, close }] = useDisclosure(false);
    const { width } = useViewportSize();
    const { pathname } = useRouter();

    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
        setColorScheme(nextColorScheme);
        setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
    };

    useEffect(() => {
        if (width >= 800)
            close();
    }, [width])

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                    <MantineProvider
                        withGlobalStyles
                        withNormalizeCSS
                        theme={{ colorScheme, primaryColor: "violet" }}
                    >
                        <NextNProgress color='#9775FA' height={3} showOnShallow={true} options={{ easing: 'ease', speed: 400, showSpinner: false }} />
                        <AppShell
                            padding="md"
                            navbar={<NavBar />}
                            header={width <= 800 && pathname.includes("home") ? <div style={{height: 50}}><Burger p={30} opened={opened} onClick={open} /></div> : <></>}
                        >
                            <Notifications position="bottom-left" />
                            <NavigationDrawer opened={opened} onClose={close} />
                            <Component {...pageProps} />
                        </AppShell>
                    </MantineProvider>
                </ColorSchemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;