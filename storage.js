const itemsArray=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[];
console.log(itemsArray);


function displayDate(){
    let date= new Date();
    console.log(date)
    date=date.toString().split(" ");
    document.getElementById('date').innerHTML="Dt: "+date[1]+" "+date[2]+" "+date[3];
}
// function addTask(){
//     if(document.getElementById('task').value.length==0)
//     {
//         alert('Please Enter a task');
//     }
//     else
//     {
//         document.getElementById('tasks').innerHTML+=
//         `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.getElementById('task').value}
//                 </span>
//                 <button class="deleteBtn">
//                 <img src="trash.svg">
//                 </button>
//             </div>
//        `
//         var current_tasks=document.getElementsByClassName('deleteBtn');
//         for(let i=0;i,current_tasks.length;i++){
//             current_tasks[i].onclick=function(){
//                 this.parentNode.remove();
//             }
//         }
//         var tasks=document.getElementsByClassName('task');
//         for(i=0;i<tasks.length;i++)
//         {
//             tasks[i].onclick=function(){
//                 this.classList.toggle('completed');
//             }
//         }
//         document
//     }
// }
function displayTask(){
    let items="";
    for(let i=0;i<itemsArray.length;i++)
    {
        items+=` <div class="task">
                        <span id="taskname">
                          ${itemsArray[i]}
                      </span>
                      <div class="controlBtn">
                      
                      <button class="delete" onClick="deleteTask(${i})">
                      <i class="fa-solid fa-trash"></i>
                      </button>
                      
                      </div>
                  </div>`
    }
    document.getElementById('to-do-list').innerHTML=items;
}

function addTask(){
    const item=document.getElementById('task').value;
    itemsArray.push(item);
    localStorage.setItem("task",JSON.stringify(itemsArray));
    location.reload();
}
function deleteTask(i){
    itemsArray.splice(i,1);
    localStorage.setItem("task",JSON.stringify(itemsArray));
    console.log("The task is delete");
    location.reload();
}
function deleteAllTask(){
    localStorage.clear("task");
    location.reload();
}
window.onload=displayDate(); 
window.onload=displayTask(); 
    // displayTask();
   
// </div>
