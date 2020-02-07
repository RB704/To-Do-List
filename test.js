var todolist = /** @class */ (function () {
    function todolist(todoname, tododescription, todocompleted) {
        this.todoname = todoname;
        this.tododescription = tododescription;
        this.todocompleted = todocompleted;
        this.name = todoname;
        this.description = tododescription;
        this.completed = todocompleted;
    }
    todolist.prototype.allTodoItems = function () {
        return todolist.alltodos;
    };
    todolist.alltodos = new Array;
    return todolist;
}());
window.onload = function () {
    var task = document.getElementById("todoName");
    var description = document.getElementById("todoDescription");
    document.getElementById("todoadd").addEventListener("click", function () { return createItem(task.value, description.value); });
};
function createItem(task, description) {
    var Item = new todolist(name, description, false);
    todolist.alltodos.push(Item);
    var div = document.getElementById("todoList");
    var list = "<dl class='dl-horizontal'><center>";
    for (var i = 0; i < todolist.alltodos.length; ++i) {
        list = " <dt> " + todolist.alltodos[i].name + ' </dt> <dd> ' + todolist.alltodos[i].description + '</dd>';
    }
    list += "</center></dl>";
    div.innerHTML = list;
    document.getElementById("todoName").value = "";
    document.getElementById("todoDescription").value = "";
}
