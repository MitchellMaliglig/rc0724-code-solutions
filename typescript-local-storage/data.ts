/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): Todo[] | [] {
  const todosJSON = localStorage.getItem('todos-storage');
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
}

// error  'writeTodos' is defined but never used  @typescript-eslint/no-unused-vars
const false_ = false;
if (false_) {
  writeTodos();
}
