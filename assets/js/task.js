// criando a função para criar as tarefas

/*<label class="todo__item">
    <input type="checkbox">
    <div>teste de item 2</div>
    <button class="delete"><i class="fas fa-trash-alt delete"></i></button>
</label>*/

//let dataBase = [];
//se tiver vazio, retorna 1 array vazio senão pega do localStorage o item todoList
const getdb = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setdb = dataBase => localStorage.setItem('todoList', JSON.stringify(dataBase))

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
    const dataBase = getdb();
    //dataBase.forEach((task, indice) => createTask(task.name, task.status, indice))
    //para cada obj no db, vao ser criadas task
    //indice para poder diferenciar cada um dos itens
}

const addTask = (event) => {
    event.preventDefault();
    const dataBase = getBanco();
    const input = document.getElementById('titleTask')
    dataBase.push({'name': input.value, 'status': '' })

    setdb(dataBase)
    render();
    input.value = '';
    modal.close(); //fechar modal
}

const removeTask = indice => {
    const dataBase = getdb();
    dataBase.splice(`${indice}, 1`)//deletando 1 item a partir do indice enviado por parâmetro
    setdb(dataBase) //atualiza localStorage
    render();
}

const updateDataBase = indice => {
    const dataBase = getdb();
    dataBase[indice].status = dataBase[indice].status === '' ? 'checked' : '';
    setdb(dataBase)
    render();
} 
const onClickTask = (event) => {
    const el = event.target;
    
    if(el.getAttribute('data-id') === 'delete-icon') {
        const indice = el.dataset.indice
        removeTask(indice)
    } else if(el.type === 'checkbox') {
        const indice = el.dataset.indice
        updateDataBase(indice)
    }
}
document.getElementById('todoList').addEventListener('click', onClickTask)
document.getElementById('addTask').addEventListener('click', addTask)
render();