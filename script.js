function changeTheme() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Switch to Light Mode";
    } else {
        button.textContent = "Switch to Dark Mode";
    }
}
