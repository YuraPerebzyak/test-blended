import { readFromLocalStorage } from "./local-storage";
export const STORAGE_KEY = "tasks";

export const   tasks = readFromLocalStorage(STORAGE_KEY);

