

let taskName = document.querySelector("#taskName");
let dateName = document.querySelector("#dateName");
let clearBtn = document.querySelector("#clearBtn")


// btn
let addTaskBtn = document.querySelector("#addTaskBtn");

// display
let taskList = document.querySelector("#taskList");

let tasks = JSON.parse(localStorage.getItem("entries"));

console.log(tasks);

let list = "";

if (tasks == null) {
    list = `<p> No Task Added</p>`;

}
else {
    tasks.forEach((x) => {
    list += `<li>${x.emplyTaskName} - ${x.emplyDateName}</li>`
})
}

taskList.innerHTML = list;
let addTask = () => {

    if ( tasks == null ) {
        tasks = [];
    }
   
    let task = {
        emplyTaskName: taskName.value,
        emplyDateName: dateName.value,
        
    }

    tasks.push(task);
    console.log(tasks);

    // JSON.stringify converts objects into a string
    localStorage.setItem("entries", JSON.stringify(tasks));

    if ( tasks == null) {
    let warning = document.querySelector("#warning");
    warning.style.display ="none"
    }
    
    //display newly added task
let item = document.createElement("li");
item.innerHTML = `${task.emplyTaskName} - ${task.emplyDateName}`;

taskList.appendChild(item);



}

let clear = () => {
    localStorage.clear();
    taskList.innerHTML = "";
}

// events

clearBtn.addEventListener("click", clear)
addTaskBtn.addEventListener("click", addTask);
