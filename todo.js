var todo = /** @class */ (function () {
    function todo(todoname, tododescription, todocompleted) {
        this.todoname = todoname;
        this.tododescription = tododescription;
        this.todocompleted = todocompleted;
        this.name = todoname;
        this.description = tododescription;
        this.completed = todocompleted;
    }
    return todo;
}());
var todolist = /** @class */ (function () {
    function todolist() {
    }
    todolist.prototype.createtodoitem = function (name, description) {
        var newItem = new todo(name, description, false);
        //let totalCount: number = 
        todolist.alltodos.push(newItem);
    };
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
    var Item = new todolist();
    Item.createtodoitem(task, description);
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
