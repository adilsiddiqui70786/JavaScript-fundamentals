let todo = [];

let req = prompt("Please Enter your request!");


while(true){
    if(req == "quit"){
        console.log("Quitting App");
        break;
    }

    if(req == "list"){
        console.log("-----------");
        for(i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------");     
    } else if (req == "add"){
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added")
    } else if (req == "delete"){
        let idx = prompt("please enter which task you want to delete");
        todo.splice(idx , 1);
        console.log("task deleted");
    } else{
        console.log("Wrong requested");
    }
    req = prompt("Please Enter your request!");
}


