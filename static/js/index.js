import { differenceInYears } from "https://cdn.skypack.dev/date-fns";

function getCurrentTheme() {
    return document.documentElement.getAttribute("data-bs-theme");
}

function setCurrentTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
}

function syncThemeButton(theme) {
    document.getElementById("btn-check-outlined").checked = theme === "dark" ? true : false;
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
    let savedTheme = getSavedTheme();
    savedTheme = savedTheme ? savedTheme : "light";
    setCurrentTheme(savedTheme);
    syncThemeButton(savedTheme);
}

function getAge() {
    const birthday = new Date(2002, 5, 27);
    const today = new Date();
    return differenceInYears(today, birthday);
}

function setAgeAtDOM() {
    const aboutElement = document.getElementById("about");
    aboutElement.textContent = aboutElement.textContent.replace("{{idade}}", getAge());
}

loadTheme();
setAgeAtDOM();