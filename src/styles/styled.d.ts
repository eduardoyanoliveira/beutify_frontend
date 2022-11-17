import 'styled-components';

export interface ThemeColors {
    primary: string,
    success: string,
    primaryGradient: string,
    secondary: string,
    background: string,
    backgroundAlt: string,
    font: string,
    iconColor: string,
    stroke: string,
}

type Font = {
    fontSize: string;
    letterSpacing: string;
    lineHeight: string;
    fontWeight: number | string;
}

export interface Typographies{
    body: Font,
    titleOne : Font,
    titleTwo: Font,
    subtitleOne: Font,
    subtitleTwo: Font,
    button: Font
};


declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: ThemeColors,
        typographies : Typographies
    }
}