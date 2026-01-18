/* =========================
   MINI SPA NAVIGATION
========================= */

const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

function showPage(pageId) {
  pages.forEach(page => {
    page.classList.remove("active");
  });

  navButtons.forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

  document
    .querySelector(`.nav-btn[data-page="${pageId}"]`)
    .classList.add("active");
}

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const page = button.getAttribute("data-page");
    showPage(page);
  });
});

/* =========================
   TASK MANAGER
========================= */

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  tasks.push(text);
  taskInput.value = "";
  renderTasks();
});

taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
