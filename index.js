import Task from "./task.js";
import UI from "./ui.js";

const ui = new UI();
ui.showAllTasks();

document.querySelector(".AddTaskBtn").addEventListener("click", (e) => {
  const textTitle = document.querySelector("#newtaskID").value;

  if (textTitle.length > 0) {
    const task = new Task(textTitle);
    ui.addToUI(task);
    ui.resetForm();
    console.log(task);
  }
});

document.querySelector(".task-list").addEventListener("click", function (e) {
  // console.log(e.target.className);

  if (e.target.className.includes("task__op_edit")) {
    //alert("Update");
    ui.editTask(e);
  }

  if (e.target.className.includes("task__op_delete")) {
    // console.log("Delete Button Prssed");
    ui.deleteTask(e);
  }
  if (e.target.className.includes("task-check")) {
    ui.completeTask(e);
  }
});
