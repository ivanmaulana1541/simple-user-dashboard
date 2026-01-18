/* =========================
   GREETING
========================= */

const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();

let greeting = "Hello";
if (hour < 12) greeting = "Good morning";
else if (hour < 18) greeting = "Good afternoon";
else greeting = "Good evening";

greetingEl.textContent = greeting;

/* =========================
   TASK MANAGER LOGIC
========================= */

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const tasksCountEl = document.getElementById("tasks");

let tasks = [];

/* Update statistics */
function updateTaskCount() {
  tasksCountEl.textContent = tasks.length;
}

/* Render tasks to DOM */
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });

  updateTaskCount();
}

/* Add task */
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  tasks.push(taskText);
  taskInput.value = "";

  renderTasks();
}

/* Event listeners */
addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    addTask();
  }
});
