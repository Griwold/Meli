import { ThemeOptions, Palette } from "@mui/material/styles";
import React from "react";

declare module '@mui/material/styles' {

    interface Palette {
        searchBar: {
            main: string,
            dark: string,
            lightDark: string,
            extraLightDark: string
        }
    }

    interface PaletteOptions {
        searchBar: {
            main: React.CSSProperties['color'],
            dark: React.CSSProperties['color'],
            lightDark: React.CSSProperties['color'],
            extraLightDark: React.CSSProperties['color']
        }
    }
}