const input = document.getElementById('input-box');
const taskContainer = document.getElementById('task-container');
const addBtn = document.getElementById('add-btn');

//empty arr to store tasks objects
let tasks = [];

function addTasks() {
    const taskText = input.value.trim() ;
    if(taskText === ''){
        alert('You need to add a task');
        return;
    }
    const existTasks = new Set(tasks.map(task => task.text));
    if(existTasks.has(taskText)){
        alert('This task already exists');
        input.value = '';
        return;
    }
        tasks.push(
            {id: Date.now(),
             text: taskText}
        );
        
    renderTasks();
    saveData();
    input.value = '';
}

function renderTasks() {
    taskContainer.innerHTML = '';
     tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.id = task.id;
        taskContainer.appendChild(li);

        const span = document.createElement('span');
        span.textContent = '\u00d7';
        span.setAttribute('aria-label', 'Delete task');
        li.appendChild(span);
     });

    
}


taskContainer.addEventListener('click', (e) =>{
   
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();

    }else if(e.target.tagName === 'SPAN'){
    
        const id = e.target.parentElement.id;
    
        const taskToRemove = tasks.findIndex(task => task.id === parseInt(id, 10));

        if(taskToRemove !== -1){
            tasks.splice(taskToRemove, 1)
            e.target.parentElement.remove();
        }
        
        saveData();
    }
});

function saveData() {
    localStorage.setItem('data', JSON.stringify(tasks));
}

function retrieveData() {
    const storedTasks = localStorage.getItem('data');
    try{

        tasks = storedTasks ? JSON.parse(storedTasks) : [];
        renderTasks();
    }catch(error) {
        console.error('Error parsing JSON from localStorage', error);
        tasks = [];
    }
    renderTasks();


}
retrieveData();

addBtn.addEventListener('click', addTasks);
input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        addTasks();
    }
})
