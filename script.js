const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// ამოვიღოთ შენახული ტასკები localStorage-დან (თუ არსებობს)
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ფუნქცია ტასკების ჩვენებისთვის
function displayTasks() {
  taskList.innerHTML = ""; // სია თავიდან იწმინდება

  // 🔁 LOOP: გადავუვლით ყველა ტასკს
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.textContent = tasks[i];

    // წაშლის ღილაკი
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // წაშლის ფუნქცია
    deleteBtn.addEventListener("click", function () {
      tasks.splice(i, 1); // წაშლის ტასკს სიიდან
      localStorage.setItem("tasks", JSON.stringify(tasks)); // განახლება
      displayTasks(); // თავიდან აჩვენე
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
}

// ახალი ტასკის დამატება
addBtn.addEventListener("click", function () {
  const taskText = input.value.trim();

  if (taskText !== "") {
    tasks.push(taskText); // სიაში დამატება
    localStorage.setItem("tasks", JSON.stringify(tasks)); // შენახვა
    input.value = "";
    displayTasks();
  }
});

// პირველ ჩატვირთვაზე ყველა ტასკის ჩვენება
displayTasks();
