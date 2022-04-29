import Task from "./task.js";
import UI from "./ui.js";

const ui = new UI();
document.querySelector(".AddTaskBtn").addEventListener("click", (e) => {
  const textTitle = document.querySelector("#newtaskID").value;

  if (textTitle.length > 0) {
    const task = new Task(textTitle);
    ui.addToUI(task);
    ui.resetForm();
    console.log(task);
  }
});
