// Simulated dynamic data
const stats = {
  projects: 3,
  tasks: 24,
  messages: 5
};

// Update stats dynamically
document.getElementById("projects").textContent = stats.projects;
document.getElementById("tasks").textContent = stats.tasks;
document.getElementById("messages").textContent = stats.messages;

// Greet user based on time
const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();

let greeting = "Hello";
if (hour < 12) greeting = "Good morning";
else if (hour < 18) greeting = "Good afternoon";
else greeting = "Good evening";

greetingEl.textContent = greeting;
