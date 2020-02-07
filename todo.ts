class todo{
    name:string;
    description: string;
    completed: boolean;
    constructor(public todoname: string, public tododescription: string, public todocompleted: boolean){
        this.name=todoname;
        this.description=tododescription;
        this.completed=todocompleted;
    }
}

class todolist{
    public static alltodos:todo[] = new Array;
    
    createtodoitem(name:string, description:string){
        let newItem = new todo(name,description, false);
        //let totalCount: number = 
        todolist.alltodos.push(newItem);
    }
    allTodoItems():todo[]{
        return todolist.alltodos;
    }
}


window.onload=function(){
let task=<HTMLInputElement>document.getElementById("todoName");
let description=<HTMLInputElement>document.getElementById("todoDescription");
document.getElementById("todoadd").addEventListener("click", ()=>createItem(task.value,description.value));
}

function createItem(task:string,description:string){
    let Item=new todolist();
    Item.createtodoitem(task,description);

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