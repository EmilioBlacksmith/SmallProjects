const AppContainer = document.getElementById("appContainer");
const newTaskTitle = document.getElementById("newTaskTitle");

let TaskList = [];

// Task Object Constructor
function Task(checked, title, id) {
  this.checked = checked;
  this.title = title;
  this.id = id;
}

function CreateTask() {
  if (newTaskTitle.value !== "") {
    let newTask = new Task("unchecked", newTaskTitle.value, TaskList.length);
    TaskList.push(newTask);
    UpdateAllTasks();
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

// Updating Tasks so the last list changes accordingly

function UpdateAllTasks() {
  CleanTaskListContainer();

  TaskList.forEach((task) => {
    let newTaskObject = document.createElement("div");
    newTaskObject.classList.add("taskCard");
    newTaskObject.setAttribute("draggable", true);
    newTaskObject.innerHTML = `
      <button class="deleteButton" onclick="DeleteTask(${task.id})">
        <i class="fa-solid fa-trash"></i>
      </button>
      <p>${task.title}</p>
      <input type="checkbox" />
    `;
    newTaskTitle.value = "";
    AppContainer.appendChild(newTaskObject);
  });
}

function CleanTaskListContainer() {
  const currentTasks = document.querySelectorAll(".taskCard");
  currentTasks.forEach((el) => {
    el.remove();
  });
}

// Delete an entry based on the ID of it

function DeleteTask(id) {
  if (TaskList.length <= 1) {
    TaskList.pop();
  } else {
    TaskList.splice(id, 1);
  }
  UpdateAllTasks();
}

// TODO: Change whole parent based on object
// TODO: Click and Drag Sorting Order
