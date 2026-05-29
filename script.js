const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function showMessage(text, type) {
    message.textContent = text;
    message.className = type;

    // remove message after 2 seconds
    setTimeout(() => {
        message.textContent = "";
        message.className = "";
    }, 2000);
}

function addTask() {
    const taskText = taskInput.value.trim();

    // ❌ Empty check
    if (taskText === "") {
        showMessage("Please enter a task", "error");
        return;
    }

    // ❌ Min length check
    if (taskText.length < 3) {
        showMessage("Task must be at least 3 characters", "error");
        return;
    }

    // ❌ Numbers only check
    if (/^\d+$/.test(taskText)) {
        showMessage("Task cannot be only numbers", "error");
        return;
    }

    // ✅ Create task
    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
        showMessage("Task deleted successfully", "success");
    });

    taskList.appendChild(li);

    taskInput.value = "";

    showMessage("Task added successfully", "success");
}
