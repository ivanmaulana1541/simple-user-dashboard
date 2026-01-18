document.addEventListener("DOMContentLoaded", () => {

  /* MINI SPA */
  const buttons = document.querySelectorAll(".nav-btn");
  const pages = document.querySelectorAll(".page");

  function showPage(pageId) {
    pages.forEach(p => p.classList.remove("active"));
    buttons.forEach(b => b.classList.remove("active"));

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

  /* TASK STATE */
  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addTaskBtn");
  const list = document.getElementById("taskList");
  const emptyState = document.getElementById("emptyState");

  const totalEl = document.getElementById("totalTasks");
  const activeEl = document.getElementById("activeTasks");
  const doneEl = document.getElementById("doneTasks");

  let tasks = [];

  function updateStats() {
    totalEl.textContent = tasks.length;
    doneEl.textContent = tasks.filter(t => t.done).length;
    activeEl.textContent = tasks.filter(t => !t.done).length;
  }

  function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task, i) => {
      const li = document.createElement("li");
      li.textContent = task.text;
      if (task.done) li.classList.add("done");

      li.addEventListener("click", () => {
        tasks[i].done = !tasks[i].done;
        renderTasks();
        updateStats();
      });

      list.appendChild(li);
    });

    emptyState.style.display = tasks.length === 0 ? "block" : "none";
  }

  addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    tasks.push({ text, done: false });
    input.value = "";

    renderTasks();
    updateStats();
  });

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") addBtn.click();
  });

});
