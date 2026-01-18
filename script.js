document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MINI SPA NAVIGATION
  ========================= */

  const buttons = document.querySelectorAll(".nav-btn");
  const pages = document.querySelectorAll(".page");

  function showPage(pageId) {
    pages.forEach(page => page.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(pageId).classList.add("active");
    document
      .querySelector(`.nav-btn[data-page="${pageId}"]`)
      .classList.add("active");
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      showPage(btn.dataset.page);
    });
  });

  showPage("dashboard");

  /* =========================
     TASK MANAGER (STATE)
  ========================= */

  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addTaskBtn");
  const list = document.getElementById("taskList");

  const totalEl = document.getElementById("totalTasks");
  const doneEl = document.getElementById("doneTasks");
  const activeEl = document.getElementById("activeTasks");

  let tasks = [];

  function updateStats() {
    totalEl.textContent = tasks.length;
    doneEl.textContent = tasks.filter(t => t.done).length;
    activeEl.textContent = tasks.filter(t => !t.done).length;
  }

  function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task.text;

      if (task.done) {
        li.classList.add("done");
      }

      li.addEventListener("click", () => {
        tasks[index].done = !tasks[index].done;
        renderTasks();
        updateStats();
      });

      list.appendChild(li);
    });
  }

  addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (!text) return;

    tasks.push({ text, done: false });
    taskInput.value = "";

    renderTasks();
    updateStats();
  });

  taskInput.addEventListener("keydown", e => {
    if (e.key === "Enter") addBtn.click();
  });

});
