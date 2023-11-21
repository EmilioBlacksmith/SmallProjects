const AppContainer = document.getElementById("appContainer");

function Task(checked, title) {
  this.checked = checked;
  this.title = title;
}

function CreateTask(title) {
  let newTask = new Task("unchecked", title);
  let newTaskObject = document.createElement("div");
  newTaskObject.classList.add("taskCard");
  newTaskObject.setAttribute("draggable", true);
  newTaskObject.innerText = newTask.title;
  AppContainer.appendChild(newTaskObject);
}
