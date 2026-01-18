document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".nav-btn");
  const pages = document.querySelectorAll(".page");

  function showPage(pageId) {
    pages.forEach(page => page.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(pageId).classList.add("active");
    document.querySelector(`.nav-btn[data-page="${pageId}"]`)
      .classList.add("active");
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const page = btn.dataset.page;
      showPage(page);
    });
  });

  // Default
  showPage("dashboard");

  // TASK LOGIC
  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addTaskBtn");
  const list = document.getElementById("taskList");

  addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);

    input.value = "";
  });

});
