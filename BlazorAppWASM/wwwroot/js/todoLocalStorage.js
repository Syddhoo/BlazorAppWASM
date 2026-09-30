export function getTodos(key) {
    const v = localStorage.getItem(key);
    return v ?? "[]";
}

export function setTodos(key, json) {
    localStorage.setItem(key, json);
}
