import { CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import { Provider } from 'react-redux';

import { Store } from '../Toolkit/Store';
import { createCustomTheme } from '../styles/theme/createCustomTheme';
import Navbar from '../Page-Components/Navbar';

function MyApp(props) {
    const { Component, pageProps } = props;

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        setMode((val) => (val === 'light' ? 'dark' : 'light'));
    };

    const theme = useMemo(() => {
        let theme = createCustomTheme(mode);
        theme = responsiveFontSizes(theme);
        return theme;
    }, [mode]);
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Nextjs-Practice</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Provider store={Store}>
                    <CssBaseline enableColorScheme />
                    <Navbar toggleMode={toggleMode} />
                    <Component {...pageProps} />
                </Provider>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
