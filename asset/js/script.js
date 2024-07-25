function toggleTheme(img) {
    const app = document.getElementById('app');
    const currentTheme = app.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    if (newTheme == "dark") {
        img.src = "asset/assets/moon.svg";
        document.querySelector(".twitter").src = "asset/assets/twitter-dark.svg";
        document.querySelector(".github").src = "asset/assets/github-dark.svg";
        document.querySelector(".linkedin").src = "asset/assets/linkedin-dark.svg";

        document.querySelectorAll(".checkmark").forEach(check => {
            check.src = "asset/assets/checkmark-dark.svg";
        });
    } else {
        img.src = "asset/assets/sun.svg";
        document.querySelector(".twitter").src = "asset/assets/twitter-light.svg";
        document.querySelector(".github").src = "asset/assets/github-light.svg";
        document.querySelector(".linkedin").src = "asset/assets/linkedin-light.svg";

        document.querySelectorAll(".checkmark").forEach(check => {
            check.src = "asset/assets/checkmark-light.svg";
        });
    }

    app.setAttribute('data-theme', newTheme);
}

if (window.matchMedia) {
    // Check if the user prefers a light or dark theme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(prefersDarkMode);
    if (prefersDarkMode) {
        document.querySelector(".colorMode").click();
    }
}
