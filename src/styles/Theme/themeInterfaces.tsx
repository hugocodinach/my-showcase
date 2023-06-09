export interface IBreakpoints {
    mobileS: number;
    mobileM: number;
    mobileL: number;
    tablet: number;
    laptop: number;
    laptopL: number;
    desktop: number;
}

export interface ISpacing {
    xs: string;
    s: string;
    xxl: string;
}

export interface ITypography {
    fontSize: string;
    fontWeight: number;
}

export interface ITypographies {
    title: ITypography;
    subtitle: ITypography;
    body: ITypography;
    bodyAccent: ITypography;
    button: ITypography;
}

export interface IColors {
    blue: string;
    purple: string;
    pink: string;
    yellow: string;
    text: string;
    white: string;
}

export interface ITheme {
    colors: IColors;
    typography: ITypographies;
    spacing: ISpacing;
    breakpoints: IBreakpoints;
};