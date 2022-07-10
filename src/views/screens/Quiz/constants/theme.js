import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');
import colors from '../../../../consts/colors'

export const COLORS = {
    white       : '#fff',
    dark        : '#000',
    blue        : '#88aae3',
    darkblue    : '#82a1ce',
    yellow      : '#FFD24C',
    yellowsoft  : '#FFE69A',
    light       : '#e5e5e5',
    grey        : '#e7e3e3',
    // primary: "#252c4a",
    primary: colors.blue,
    secondary: '#0060bd',
    accent: colors.yellowsoft,
    
    success: '#00C851',
    error: '#ff4444',

    black: "#171717",
    white: colors.white,
    dark: colors.dark,
    background: colors.blue
}


export const SIZES = {
    base: 10,
    width,
    height
}