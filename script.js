document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MINI SPA NAVIGATION
  ========================= */

  const navButtons = document.querySelectorAll(".nav-btn");
  const pages = document.querySelectorAll(".page");

  function showPage(pageId) {
    pages.forEach(page => page.classList.remove("active"));
    navButtons.forEach(btn => btn.classList.remove("active"));

    const targetPage = document.getElementById(pageId);
    const targetBtn = document.querySelector(
      `.nav-btn[data-page="${pageId}"]`
    );

    if (targetPage) targetPage.classList.add("active");
    if (targetBtn) targetBtn.classList.add("active");
  }

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const page = button.dataset.page;
      showPage(page);
    });
  });

  // Default page
  showPage("dashboard");

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
    if (!text) return;

    tasks.push(text);
    taskInput.value = "";
    renderTasks();
  });

  taskInput.addEventListener("keydown", e => {
    if (e.key === "Enter") addTaskBtn.click();
  });

});
