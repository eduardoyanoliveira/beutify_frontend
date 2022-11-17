import { ThemeColors } from "../styled";

const baseColors = {
    primary: '#754CB0', 
    success: "#3C8C6A",
    secondary: '#4F71D5',
    primaryGradient: 'linear-gradient(259.64deg, #23AE78 7.73%, #229B68 50.88%, #068155 92.27%)',
};


export const darkColors : ThemeColors = {
    ...baseColors,
    background: 'linear-gradient(90.51deg, rgba(13, 15, 15, 0.97) 0.52%, #0D0F0F 60.38%, rgba(13, 15, 15, 0.97) 99.67%)',
    backgroundAlt : '#191A1A',
    font: '#E1E1E6',
    iconColor: '#83838E',
    stroke: '#1E1E1E'
};


export const lightColors : ThemeColors = {
    ...baseColors,
    background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF)',
    backgroundAlt : '#F7F7F7',
    font: '#44444F', // '#1C1C23'  
    iconColor: '#83838E',
    stroke: '#F5F5F5'
};