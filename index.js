const inputTarefa = document.querySelector('.entrada')
const btnTarefa = document.querySelector('.btn-tarefas')
const tarefas = document.querySelector('.tarefas')

function crairLi(){
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
})

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'apagar esta tarefa')
    botaoApagar.style.backgroundColor = 'white'
    botaoApagar.style.color = 'black'
    botaoApagar.style.cursor = 'pointer'
    botaoApagar.style.borderRadius = '8px'
    botaoApagar.style.transform = 'translateY(0px)'
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput){
    const li = crairLi();
    li.innerHTML = textoInput;
    li.style.fontSize = '1.2rem'
    li.style.fontFamily = 'fantasy'
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e){
    const el = e.target;

    if(el. classList.contains('apagar')){
        el.parentElement.remove();
    }
})

