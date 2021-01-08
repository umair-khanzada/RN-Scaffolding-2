import { createContext } from 'react';

export const ThemeContext = createContext({});

export const themesSchema = {
    light: {
        primary: '#000',
        secondary: '#435',
        dark: '#555',
        light: '#485',
    },
    dark: {
        primary: '#000',
        secondary: '#435',
        dark: '#555',
        light: '#485',
    },
};

export const LIGHT_VARIANT = 'light'; 
export const DARK_VARIANT = 'dark'; 