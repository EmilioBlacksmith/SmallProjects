const AppContainer = document.getElementById("appContainer");
const newTaskTitle = document.getElementById("newTaskTitle");

function Task(checked, title) {
  this.checked = checked;
  this.title = title;
}

function CreateTask() {
  if (newTaskTitle.value !== "") {
    let newTask = new Task("unchecked", newTaskTitle.value);
    let newTaskObject = document.createElement("div");
    newTaskObject.classList.add("taskCard");
    newTaskObject.setAttribute("draggable", true);
    newTaskObject.innerText = newTask.title;
    newTaskTitle.value = "";
    AppContainer.appendChild(newTaskObject);
  } else {
    window.alert("the task needs a title, bro");
  }
}

// if enter press when on top of task title input, then create task
newTaskTitle.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    CreateTask();
  }
});
