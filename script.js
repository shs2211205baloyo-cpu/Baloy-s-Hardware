const darkModeToggle = document.querySelector("#darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    darkModeToggle.textContent =
        document.documentElement.classList.contains("dark") ? "DarkMode" : "LightMode";
});