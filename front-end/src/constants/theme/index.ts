import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        app: {
            main: '#FFE600',
            dark: '#333333',
            lightDark: '#999999',
            extraLightDark: '#EEEEEEEE'
        },
        primary: {
            main: '#FFF'
        },
        secondary: {
            main: '#FFE600'
        },
    },
});

export default theme;