'use strict';
let todos = readTodos();
function writeTodos() {
  let todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  let todosJSON = localStorage.getItem('todos-storage');
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
}
