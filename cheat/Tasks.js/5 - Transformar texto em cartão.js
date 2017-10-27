// PRIMEIRA IMPLEMENTAÇÃO

/**
 * Função para transformar o texto em cartão
 *
 * TODO:
 * [X] Importar o template
 * [X] Criar variáveis para os elementos a serem modificados
 * [X] Inserir o texto
 * [ ] Inserir ação de clique na tarefa
 */
function createCard(text) {
  let el = document.importNode(taskTemplate.content, true).children[0];
  let input = el.querySelector('input');
  let label = el.querySelector('label');
  label.textContent = text;
  taskList.appendChild(el);
  inputClear();
}

// SEGUNDA IMPLEMENTAÇÃO

/**
 * Função para transformar o texto em cartão
 *
 * TODO:
 * [X] Importar o template
 * [X] Criar variáveis para os elementos a serem modificados
 * [X] Inserir o texto
 * [X] Inserir ação de clique na tarefa
 */
function createCard(text) {
  let el = document.importNode(taskTemplate.content, true).children[0];
  let input = el.querySelector('input');
  let label = el.querySelector('label');
  label.textContent = text;
  let appended = taskList.appendChild(el);
  label.addEventListener('click', function(event) {
    input.disabled = true;
    input.checked = true;

    setTimeout(function(){
      completeTask(appended, text);
    }, 300);
  });
  inputClear();
}