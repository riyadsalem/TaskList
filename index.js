import Task from "./task.js";
import UI from "./ui.js";

const ui = new UI();
document.querySelector(".AddTaskBtn").addEventListener("click", (e) => {
  const textTitle = document.querySelector("#newtaskID").value;
  const task = new Task(textTitle);
  ui.addToUI(task);
  ui.resetForm();
  console.log(task);
});
