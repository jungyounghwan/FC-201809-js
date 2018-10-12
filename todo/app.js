
(function App() {
    var todos = [
        {todo: ' 공부하기', done: false},
        {todo: ' 놀기', done: true},
        {todo: ' 밥먹기', done: false},
    ],
    todoContainerEl = document.querySelector('.todo-container'),
    plusBtnEl = document.querySelector('.add-todo button');
    titleDateEl = document.querySelector('.title h2');

    for (var i = 0; i < todos.length; i++){
        var todoEl = creatTodoEl(todos[i]);
        todoContainerEl.appendChild(todoEl);
        renderTodoCounts();
    }

    plusBtnEl.addEventListener('click', function(e){
        var textEl = document.querySelector('.add-todo input[type="text"]'),
            todoEl = creatTodoEl({ todo: textEl.value, done: false }),
            newTodo = { todo: textEl.value, done: false }

        todoContainerEl.appendChild(todoEl);
        textEl.value = '';
        todos.push(newTodo);
        renderTodoCounts();
    });

    function creatTodoEl(todo) {
        var todoEl = document.createElement('div');
        todoEl.innerHTML = '<input type="checkbox" '+ ((todo.done) ? "checked" : "") +'> <label>' + todo.todo + '</label>';
        todoEl.className = 'todo';
        return todoEl;
    };

    function renderTodoCounts() {
        var now = new Date();
        titleDateEl.innerHTML = now.getMonth() + '월' + now.getDate() + '일 (' + getLeftCount() +')';
    };

    function getLeftCount() {
        var counts = 0;
        for (var i = 0; i < todos.length; i++) {
            if(todos[i].done === false) counts++;
        }
        return counts;
    };
}())