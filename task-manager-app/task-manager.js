// Get the task input and task list elements
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function () {
      taskItem.classList.toggle("completed");
    });

    taskItem.appendChild(deleteButton);
    taskItem.appendChild(completeButton);

    taskList.appendChild(taskItem);

    taskInput.value = "";
  }
}
