const todos = [];

const todoList = document.querySelector(".todo_list");
const addBtn = document.querySelector(".add_btn");
const input = document.querySelector(".input");
const msgAlert = document.querySelector(".alert");
const filterBtns = document.querySelector(".filter_cont");
const prioritySelect = document.querySelector("#select");

let count = 0;

let resetForm = ()=>{
    input.value = "";
    msgAlert.innerHTML = "";
    msgAlert.classList.remove("Alert--error");
}

/** ------------------------------- add todos-------------------------------- */

let createListItems = (task) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", task.id);
    listItem.innerHTML = `<div class="${task.priority}"><span>${task.text}</span><button class="delete">delete</button><button class="edit">Edit</button></div>`

    todoList.appendChild(listItem);
    resetForm()

   
}

let addTodos = (e)=> {
    e.preventDefault()
    if(input.value == ""){
        msgAlert.innerText = "Fill the Empty field"
        setTimeout(()=>msgAlert.innerText = "",2000)
    }else{
        const task = {
            id: count++,
            text: input.value,
            priority:  prioritySelect.value
        }

        console.log(task)
        todos.push(task)
        createListItems(task);
        
    }
}


addBtn.addEventListener("click", addTodos);

/**-----------------------------delete btn and edit btn------------------------ */

/** ----------function to delete task-------------*/

let deleteTask = (e)=>{
    // e.target.parentNode.parentNode.remove();
    todos.forEach((ele, ind)=>{
        if(ele.id == parseInt(e.path[2].id)){
            todos.splice(ind,1);
        }
    })
    e.path[2].remove();
}


todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        deleteTask(e)
    }else if(e.target.classList.contains("edit")){
        editTask(e)
    }
})