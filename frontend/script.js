document.addEventListener("DOMContentLoaded", () => {

  const taskInput = document.getElementById("taskInput");
  const priorityInput = document.getElementById("priority");
  const dateInput = document.getElementById("dateInput");
  const taskList = document.getElementById("taskList");
  const addBtn = document.getElementById("addBtn");

  // Load all tasks from DB on page load
  async function loadTasks() {
    const res = await fetch("http://localhost:5000/api/tasks");
    const tasks = await res.json();

    taskList.innerHTML = "";
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div>
          <strong>${task.title}</strong> 
          <span>(${task.priority})</span> 
          <small>${task.date || ""}</small>
        </div>
        <div>
          <button onclick="deleteTask('${task._id}')">❌</button>
        </div>
      `;
      taskList.appendChild(li);
    });
  }

  // Add new task
  addBtn.addEventListener("click", async () => {
    const title = taskInput.value.trim();
    const priority = priorityInput.value;
    const date = dateInput.value;

    if (!title) {
      alert("Enter task title");
      return;
    }

    const res = await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, priority, date })
    });

    if (res.ok) {
      taskInput.value = "";
      dateInput.value = "";
      loadTasks(); // refresh task list
    } else {
      const data = await res.json();
      alert(data.message);
    }
  });

  // Delete task
  window.deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, { method: "DELETE" });
    loadTasks();
  };

  // Initial load
  loadTasks();

});