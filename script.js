const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let tasks = [];

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  tasks.push(taskText);
  taskInput.value = "";

  renderTasks();
});

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });

  taskCount.textContent = tasks.length;
}

/* Greeting */
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) greeting.textContent = "Good morning";
else if (hour < 18) greeting.textContent = "Good afternoon";
else greeting.textContent = "Good evening";
