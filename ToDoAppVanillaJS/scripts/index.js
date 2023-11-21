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
    newTaskObject.innerHTML = `
    <div class="taskCard" draggable="true">
          <button class="deleteButton">
            <i class="fa-solid fa-trash"></i>
          </button>
          <p>${newTaskTitle.value}</p>
          <input type="checkbox" />
        </div>
    `;
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
