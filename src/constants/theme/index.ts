import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        searchBar: {
            main: '#FFE600',
            dark: '#333333',
            lightDark: '#999999',
            extraLightDark: '#EEEEEEEE'
        },
        primary: {
            main: '#FFF'
        },
        secondary: {
            main: '#326eb3'
        },
    },
});

export default theme;