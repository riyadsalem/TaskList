import LS from "./ls.js";

function UI() {}
const ls = new LS();

UI.prototype.showAllTasks = function () {
  let tasks = ls.fetchTask();
  let newHtml = "";
  tasks.forEach((task) => {
    newHtml += `
          <div class="task ${
            task.isComplete ? "completed" : ""
          }" data-createdat="${task.id}">
          <div class="task__details">
            <input type="checkbox" class="task-check" ${
              task.isComplete ? "checked" : ""
            }/>
            <label class="task-title">${task.title}</label>
          </div>
    
          <div class="task__op">
            <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
            <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
          </div>
        </div>
          `;
  });
  document.querySelector(".task-list").innerHTML = newHtml;
};

UI.prototype.addToUI = function (task) {
  ls.storeTask(task);
  let newHtml = `
      <div class="task" data-createdat="${task.id}">
      <div class="task__details">
        <input type="checkbox" class="task-check" />
        <label class="task-title">${task.title}</label>
      </div>

      <div class="task__op">
        <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
        <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
      </div>
    </div>
      `;
  document
    .querySelector(".task-list")
    .insertAdjacentHTML("afterbegin", newHtml);
};

UI.prototype.resetForm = function () {
  document.querySelector("#newtaskID").value = null;
};

UI.prototype.deleteTask = function (e) {
  const task = e.target.parentElement.parentElement;
  const id = task.dataset.createdat;
  // console.log(id);
  ls.deleteTask(id);
  task.remove();
};
UI.prototype.completeTask = function (e) {
  const task = e.target.parentElement.parentElement;
  const id = task.dataset.createdat;
  ls.completeTask(id);
  task.classList.toggle("completed");
};

UI.prototype.editTask = function (e) {
  // alert("U_P_D_A_T_E");
  const task = e.target.parentElement.parentElement;
  const id = task.dataset.createdat;
  const data = ls.findTask(id);
  this.QuerySelectorAll(data.title, data.id, "none", "inline", "inline");
};

UI.prototype.updateTask = function (e) {
  const taskId = document.querySelector("#updateTaskId").value;
  const taskTitle = document.querySelector("#newtaskID").value;
  const tasks = document.querySelectorAll(".task-title");
  // console.log(tasks);

  if (taskTitle.length > 0) {
    ls.updateTask(taskId, taskTitle);
    tasks.forEach((title) => {
      if (title.parentElement.parentElement.dataset.createdat === taskId) {
        title.innerText = taskTitle;
      }
    });
  }
  this.QuerySelectorAll("", "", "inline", "none", "none");
};

UI.prototype.cancelTask = function (e) {
  this.QuerySelectorAll("", "", "inline", "none", "none");
};

UI.prototype.QuerySelectorAll = function (
  newtaskID,
  updateTaskId,
  AddTaskBtn,
  EditTaskBtn,
  CancelTaskBtn
) {
  document.querySelector("#newtaskID").value = newtaskID;
  document.querySelector("#updateTaskId").value = updateTaskId;
  document.querySelector(".AddTaskBtn").style.display = AddTaskBtn;
  document.querySelector(".EditTaskBtn").style.display = EditTaskBtn;
  document.querySelector(".CancelTaskBtn").style.display = CancelTaskBtn;
};

export default UI;
