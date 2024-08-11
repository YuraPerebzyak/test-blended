import { refs } from "./refs";

export function renderTasks(tasks) {
    const markup = tasks.map((task) =>
        `<li class="task-list-item"> ${task}
    <button type="button">Видалити</button>
  </li>`).join('');
    refs.taskList.innerHTML = markup;
 }