import { useEffect, useState } from "react";

export function useTheme() {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "light" ? false : true;
    });

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    function toggle() {
        setDark(!dark);
    }

    return { dark, toggle };
}
