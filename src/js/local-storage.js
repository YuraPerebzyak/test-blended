export function saveToLocalStorage(key, value) {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error('Set state Error', error.message);
        
    }
 }
export function readFromLocalStorage(key) {
try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? [] : JSON.parse(serializedState)
} catch (error) {
    console.error('Get state Error', error.message);
}
 }
