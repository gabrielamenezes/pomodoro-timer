// criando a função para criar as tarefas

/*<label class="todo__item">
    <input type="checkbox">
    <div>teste de item 2</div>
    <button class="delete"><i class="fas fa-trash-alt delete"></i></button>
</label>*/

let dataBase = [
];
const createTask = (task, status='', indice) => {
    const item = document.createElement('label') //criando o label
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${task}</div> 
        <button class="delete"><i class="fas fa-trash-alt delete" data-id="delete-icon" data-indice=${indice}></i></button>
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
    dataBase.forEach((task, indice) => createTask(task.name, task.status, indice))
    //para cada obj no db, vao ser criadas task
    //indice para poder diferenciar cada um dos itens
}

const addTask = (event) => {
    event.preventDefault();
    const input = document.getElementById('titleTask')
    dataBase.push({'name': input.value, 'status': '' })
    render();
    input.value = '';
    modal.close(); //fechar modal
}

const removeTask = indice => {
    dataBase.splice(`${indice}, 1`)//deletando 1 item a partir do indice enviado por parâmetro
    render();
} 
const onClickTask = (event) => {
    const el = event.target;
    
    if(el.getAttribute('data-id') === 'delete-icon') {
        const indice = el.dataset.indice
        removeTask(indice)
    }
}
document.getElementById('todoList').addEventListener('click', onClickTask)
document.getElementById('addTask').addEventListener('click', addTask)
render();