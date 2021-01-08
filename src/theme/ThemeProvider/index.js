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

export const lightVariant = 'light'; 
export const darkVariant = 'dark'; 