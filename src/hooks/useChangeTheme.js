import { useState } from "react";

export default function useTheme() {

    const themeGlobal = {
        background: '#FFFFFF',
        homeBg: '##E5E5E5;',
        foreground: '#101010',
        foregroundLight: '#717171',
        buttonBg: '#292929',
        buttonFg: '#FFFFFF',
        buttonBgLight: '#717171',
        buttonFgLight: '#FFFFFF'
    }

    const [theme, setTheme] = useState(themeGlobal);

    return {
        theme
    };

}