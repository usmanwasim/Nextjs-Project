import { createTheme } from '@mui/material/styles';

// const themeObj = {
//     light: {
//         text: {
//             primary: '#000',
//         },
//         background: {
//             hard: '#fff',
//             medium: '#fdfdfd',
//             light: '#efefef',
//             borderLight: '#bdbdbd',
//             shadow: '#000',
//         },
//     },

//     dark: {
//         text: {
//             primary: '#fff',
//         },
//         background: {
//             hard: '#000',
//             medium: '#151515',
//             light: '#212121',
//             borderLight: '#424242',
//             shadow: '#000',
//         },
//     },
// };

export const createCustomTheme = (mode) =>
    // createTheme({
    //     palette: {
    //         mode,
    //         ...themeObj[mode],
    //     },
    //     typography: {
    //         fontFamily: ['Montserrat', 'Audiowide'].join(','),
    //     },
    //     components: {
    //         MuiCssBaseline: {
    //             styleOverrides: (theme) => `
    // 	    body {
    // 	      background-color: ${theme.palette.mode === 'dark' ? '#DEE3F6' : '#DEE3F6'}
    // 	    }
    // 	  `,
    //         },
    //         MuiButton: {
    //             variants: [
    //                 {
    //                     props: { variant: 'gradient' },
    //                     style: {
    //                         background:
    //                             'linear-gradient(90deg, rgba(19, 126, 188, 1) 0%, rgba(134, 44, 140, 1) 100%)',
    //                         boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.3)',
    //                         color: '#fff',
    //                         fontFamily: 'Montserrat',
    //                         fontWeight: '700',
    //                         textTransform: 'none',
    //                         fontStyle: 'normal',
    //                         fontSize: '16px',
    //                         lineHeight: '24px',
    //                         letterSpacing: '0.045em',

    //                         '&:hover': {
    //                             background: '#fff',
    //                             color: '#4B55A4',
    //                         },
    //                     },
    //                 },
    //             ],
    //         },
    //     },
    // });
    createTheme({
        palette: {
            mode: mode || 'light',
            background: {
                light: '#fff',
                dark: '#000',
            },
            button: {
                light: '#ffffff',
                dark: '#800080',
            },
            text: {
                light: '#000',
                dark: '#fff',
                main: '#904e19',
            },
            shadow: {
                dark: '#fff',
                light: '#800080',
            },
        },
    });
