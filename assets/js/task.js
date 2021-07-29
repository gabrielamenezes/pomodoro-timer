// criando a função para criar as tarefas

/*<label class="todo__item">
    <input type="checkbox">
    <div>teste de item 2</div>
    <button class="delete"><i class="fas fa-trash-alt delete"></i></button>
</label>*/

let dataBase = [
];
const createTask = (task, status='') => {
    const item = document.createElement('label') //criando o label
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${task}</div> 
        <button class="delete"><i class="fas fa-trash-alt delete"></i></button>
    `

    document.querySelector('.todo__list').appendChild(item)
}

const clearTask = () =>  {
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild) {
        todoList.removeChild(todoList.lastChild)
    }
}

//atualizar a tela com as informações do database
const render = () => {
    clearTask();
    dataBase.forEach(task => createTask(task.name, task.status))
    //para cada obj no db, vao ser criadas task
}

const addTask = (event) => {
    event.preventDefault();
    const input = document.getElementById('titleTask')
    dataBase.push({'name': input.value, 'status': '' })
    render();
    input.value = '';
    modal.close(); //fechar modal
}
document.getElementById('addTask').addEventListener('click', addTask)
render();