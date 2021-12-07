import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    darkGreen: "#229879",
    darkLime: "#1A8871",
    lightLime: "#BBD6C5",
    lime: "#2AD699",
    lightGreen: "#E7F9EF",
    lightGreen1: "#8EbCA0",

    white: "#fff",
    white2: '#F9F9F9',
    black: "#020202",
    blue: "#4096FE",
    gray: "#9e9e9e",
    gray2: '#F8F8F8',
    lightGray: "#fafafa",
    lightGray2: '#FAFAFA',
    darkGray : '#696969',
    red : 'rgb(177,39,37)',
    border : '#F5F5F5',

    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',
    transparentWhite : 'rgba(255,255,255, 0.8)',

    transparentGray: 'rgba(77,77,77, 0.6)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',

    transparent: 'transparent',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "IRANSansMobile", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "IRANSansMobile", fontSize: SIZES.h1 },
    h2: { fontFamily: "IRANSansMobile", fontSize: SIZES.h2 },
    h3: { fontFamily: "IRANSansMobile", fontSize: SIZES.h3 },
    h4: { fontFamily: "IRANSansMobile", fontSize: SIZES.h4 },
    body1: { fontFamily: "IRANSansMobile", fontSize: SIZES.body1, },
    body2: { fontFamily: "IRANSansMobile", fontSize: SIZES.body2,  },
    body3: { fontFamily: "IRANSansMobile", fontSize: SIZES.body3,},
    body4: { fontFamily: "IRANSansMobile", fontSize: SIZES.body4,  },
    body5: { fontFamily: "IRANSansMobile", fontSize: SIZES.body5, },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;