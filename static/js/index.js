function getCurrentTheme() {
    return document.documentElement.getAttribute("data-bs-theme");
}

function setCurrentTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
}

function onThemeChange() {
    const newTheme = getCurrentTheme() === "light" ? "dark" : "light"
    setCurrentTheme(newTheme);
    setSavedTheme(newTheme);
}

function getSavedTheme() {
    return window.localStorage.getItem("theme");
}

function setSavedTheme(theme) {
    window.localStorage.setItem("theme", theme);
}

function loadTheme() {
    const savedTheme = getSavedTheme();
    setCurrentTheme(savedTheme ? savedTheme : "light");
}

loadTheme();