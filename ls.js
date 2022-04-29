function LS() {
  LS.prototype.fetchTask = function () {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
      tasks = JSON.parse(tasks);
    } else {
      tasks = [];
    }
    return tasks;
  };

  LS.prototype.storeTask = function (task) {
    let tasks = this.fetchTask();
    tasks.unshift(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  LS.prototype.deleteTask = function (id) {
    let tasks = this.fetchTask();
    let index = tasks.findIndex((tasks) => tasks.id === id);
    // console.log(index);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  LS.prototype.completeTask = function (id) {
    let tasks = this.fetchTask();
    let index = tasks.findIndex((tasks) => tasks.id === id);
    if (tasks[index].isComplete) {
      tasks[index].isComplete = false;
    } else {
      tasks[index].isComplete = true;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
}
export default LS;
