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
        let todoTaskValue = document.getElementById("todoInput").value;
    currentTasks.push(todoTaskValue);
    
   
    updateHTMLContent();
    }
});

function updateHTMLContent() {
 let htmlDivContent = document.getElementById("todo-array-content");

    htmlDivContent.innerHTML = "";

 for (let i = 0; i < currentTasks.length; i++)

    {

    let taskWrapDiv = document.createElement("div");
    taskWrapDiv.classList.add("task-wrap")
    
    let circleDiv = document.createElement("div");
    circleDiv.classList.add("circle");
    circleDiv.classList.add("circle-task");

    let todoArrayTaskDiv = document.createElement("div");
    todoArrayTaskDiv.classList.add("todo-array-task");
    todoArrayTaskDiv.innerHTML = currentTasks[i];

    taskWrapDiv.appendChild(circleDiv);
    taskWrapDiv.appendChild(todoArrayTaskDiv);
    htmlDivContent.appendChild(taskWrapDiv);

    }
}
