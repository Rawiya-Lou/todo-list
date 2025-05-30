const input = document.getElementById('input-box');
const taskContainer = document.getElementById('task-container');
const addBtn = document.getElementById('add-btn');


addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        addTask();
    }

})

function addTask() {
    if(input.value === ''){
        alert('You have to Add task');
    }else{
        const newTask = document.createElement('li');
        newTask.textContent = input.value;
        taskContainer.appendChild(newTask);
        const span = document.createElement('span');
        span.innerHTML = '\u00d7'; 
        newTask.appendChild(span);
    }
    input.value = '';
    saveData();
}

taskContainer.addEventListener('click', (e) =>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();

    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
});


function saveData(){
    localStorage.setItem('data', taskContainer.innerHTML);
}

function showTask(){
  taskContainer.innerHTML = localStorage.getItem('data');
}

showTask();