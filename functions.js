var todos = ['item 1', 'item 2', 'item 3'];

//use this function code to display todos
function displayTodos() {
    console.log('My todos:', todos);
}

//use this function code to add to and display the new To Do List
function addTodo(newTodo) {
todos.push(newTodo);
displayTodos();
}
//use this function code to change a To Do item and display the new To Do list
function changeTodo(indexPosition, newValue) {
todos[indexPosition]= newValue;
displayTodos();
}
//use this function code to delete items from the To Do List and display changes
function deleteTodo(position) {
todos.splice(position, 1);
displayTodos();
}
//1 is the number of items we want deleted
