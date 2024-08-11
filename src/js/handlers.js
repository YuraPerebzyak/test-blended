import { STORAGE_KEY, tasks } from "./data";
import { saveToLocalStorage } from "./local-storage";
import { renderTasks } from "./render-functions";

export function onTaskFormSubmit(evt) { 
    evt.preventDefault();
   
    const task = evt.target.elements.taskName.value.trim();

    tasks.push(task);
    renderTasks(tasks);
    saveToLocalStorage(STORAGE_KEY, tasks)
    evt.target.reset();

}

export function initFunction(evt) {
    renderTasks(tasks);
    
}

export function onRemoveButtonClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return
    }
    
}