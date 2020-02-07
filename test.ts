class todolist{
    name:string;
    description: string;
    completed: boolean;
    constructor(public todoname: string, public tododescription: string, public todocompleted: boolean){
        this.name=todoname;
        this.description=tododescription;
        this.completed=todocompleted;
    }

    public static alltodos:todolist[] = new Array;
    
    allTodoItems():todolist[]{
        return todolist.alltodos;
    }
}


window.onload=function(){
let task=<HTMLInputElement>document.getElementById("todoName");
let description=<HTMLInputElement>document.getElementById("todoDescription");
document.getElementById("todoadd").addEventListener("click", ()=>createItem(task.value,description.value));
}

function createItem(task:string,description:string){
    let Item=new todolist(name,description, false);
    todolist.alltodos.push(Item);

    let div=<HTMLInputElement>document.getElementById("todoList");
    let list="<dl class='dl-horizontal'><center>";
    for(let i=0;i<todolist.alltodos.length;++i)
    {   list= " <dt> " + todolist.alltodos[i].name + ' </dt> <dd> ' + todolist.alltodos[i].description + '</dd>';
}
    list += "</center></dl>"
    div.innerHTML = list;

    (<HTMLInputElement>document.getElementById("todoName")).value = "";

    (<HTMLInputElement>document.getElementById("todoDescription")).value="";
}