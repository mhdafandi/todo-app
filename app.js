let currentTasks = [];
let todoInput = document.getElementById("todoInput");

function changeMode() {
    let banner = document.getElementById("banner");

    banner.classList.toggle("light-banner");

    let bottomSection = document.getElementById("bottom-section");
    bottomSection.classList.toggle("bottom-section-light");

    let modeIcon = document.getElementById("mode-icon");

    if (modeIcon.getAttribute("src") == "images/icon-sun.svg") {

        modeIcon.src = "images/icon-moon.svg"
    } else {
        modeIcon.src = "images/icon-sun.svg"
    }
}
todoInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        alert("Hello!")
    }
});

