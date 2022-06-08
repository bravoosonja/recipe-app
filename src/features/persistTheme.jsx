import { useEffect, useState } from 'react';

export const persistTheme = () => {
    const [theme, setTheme] = useState('light');
    const [isLocalStorage, setIsLocalStorage] = useState(false);

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const toggleTheme = () => {
        if (theme === "light") {
            setMode('dark')
        } else {
            setMode('light')
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches && !localTheme ?
            setMode('dark') :
            localTheme ?
                setTheme(localTheme) :
                setMode('light');
        setIsLocalStorage(true);
    }, []);


    return [theme, toggleTheme, isLocalStorage]
};

