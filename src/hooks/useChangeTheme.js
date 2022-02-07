import { useState } from "react";

export default function useTheme() {

    const themeGlobal = {
        background: '#FFFFFF',
        homeBg: '##E5E5E5;',
        foreground: '#101010',
        foregroundLight: '#717171',
        buttonBg: '#d50e0e',
        buttonFg: '#FFFFFF',
        buttonBgHover: '#9b1111',
        buttonFgHover: '#FFFFFF',
    }

    const [theme, setTheme] = useState(themeGlobal);

    return {
        theme
    };

}