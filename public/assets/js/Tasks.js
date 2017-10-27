window.addEventListener('load', function() {
  /**
   * TODO: Escopo do projeto
   * [X] Carregar os elementos da página no código
   * [X] Criar uma função para validar o input
   * [X] Criar uma função para habilitar os botões
   * [X] Criar uma função para limpar o input
   * [X] Criar uma função para transformar o texto em cartão
   * [X] Criar uma função para o botão de criar tarefa
   * [X] Criar uma função para permitir o envio do card pela tecla enter
   * [X] Criar uma função para salvar as tarefas no navegador
   * [X] Criar uma função para ler as tarefas do navegador
   * [X] Criar uma função para testar a existência de uma tarefa
   * [X] Criar uma função para carregar todas as tarefas salvas
   * [X] Criar uma função para completar uma tarefa
   * [X] Brincar com a API de notificações
   *
   * TIPS:
   * - Lembre de criar eventos para disparar as funções
   * - Peça ajuda sempre que tiver dúvidas
   */

  ///// Inicio do código /////

  /**
   * Aqui nós iremos criar constantes para facilitar o acesso aos componentes DOM da página
   *
   * TODO: Carregar os seguintes elementos
   * [X] taskList - Lista de tarefas
   * [X] taskTemplate - Template das tarefas
   * [X] inputDescription - Input com a descrição da tarefa
   * [X] btnAdd - O botão de adicionar uma tarefa
   * [X] btnDiscard - O botão para descartar a nova tarefa
   */
  const taskList = document.querySelector('#list');
  const taskTemplate = document.querySelector('#task-template');
  const inputDescription = document.querySelector('#input-description');
  const btnAdd = document.querySelector('#btn-add');
  const btnDiscard = document.querySelector('#btn-discard');

  /**
   * Função para validar o input
   *
   * TODO:
   * [X] Testar o texto do input
   * [X] Testar a existência da tarefa
   */
  function validateInput () {
    let text = inputDescription.value;
    if (text.length <= 0) {
      enableButtons(false);
      return false;
    }
    if (taskExists(text)) {
      enableButtons(false);
      return false;
    }
    enableButtons(true);
    return true;
  }

  /**
   * Função para habilitar os botões
   */
  function enableButtons(state) {
    btnAdd.disabled = !state;
    btnDiscard.disabled = !state;
  }

  /**
   * Função para limpar o input
   */
  function inputClear() {
    inputDescription.value = '';
  }

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

  /**
   * Criar uma função para o botão de criar tarefa
   *
   * TODO:
   * [X] Ler o texto do input
   * [X] Validar o input
   * [X] Criar o cartão
   * [X] Desabilitar os botões
   * [X] Limpar o input
   * [X] Salvar a tarefa no armazenamento
   */
  function newTask() {
    let text = inputDescription.value;
    if (!validateInput()) return;
    createCard(text);
    saveTask(text);
    enableButtons(false);
    notify(`Tarefa adicionada com sucesso: ${text}`);
  }

  /**
   * Criar uma função para permitir o envio do card pela tecla enter
   *
   * TODO:
   * [X] Retornar uma função que recebe evento como parâmetro
   * [X] Essa função deve testar o keyCode do evento e executar um método passado como parâmetro
   *
   * TIPS: O código para a tecla Enter é 13
   */
  function onEnter(method) {
    return function(event){
      if (event.keyCode === 13) {
        method();
      }
    }
  }

  /**
   * Funções para manipular o armazenamento local
   *
   * TIPS: O armazenamento local só permite strings, mas neste código trabalhamos com objetos
   */
  function getStorage() {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  function saveStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function taskExists(task) {
    return getStorage().includes(task);
  }

  /**
   * Função para salvar uma tarefa no armazenamento
   */

  function saveTask(text) {
    if (taskExists(text)) return false;
    let tasks = getStorage();
    tasks.push(text);
    saveStorage(tasks);
  }

  /**
   * Função para temover uma tarefa armazenadas
   */

  function removeTask(text) {
    if (!taskExists(text)) return false;
    let tasks = getStorage();
    tasks.splice(tasks.indexOf(text));
    saveStorage(tasks);
  }

  /**
   * Função para carregar todas as tarefas salvas
   */
  function loadTasks() {
    let tasks = getStorage();
    tasks.forEach(createCard);
  }

  /**
   * Função para finalizar uma tarefa
   *
   * TODO:
   * [X] Remover a tarefa do armazenamento local
   * [X] Criar animação de remoção
   * [X] Apagar o elemento
   */
  function completeTask(el, text) {
    removeTask(text);
    el.addEventListener('transitionend', function(event) {
      el.remove();
    });
    el.classList.add('hidden');
  }

  /**
   * Brincando com a API de notificação
   * @param text
   */

  /* ACOMPANHE A EXPLICAÇÃO *

  function showNotification(text) {
    let options = {
      body: text
    };
    new Notification(document.title, options);
  }

  function notify(text) {
    console.log(`Notificação: ${text}`);

    if ('Notification' in window) {
      switch (Notification.permission) {
        case 'default':
          Notification.requestPermission(function (status) {
            if (status !== 'granted') return;
            showNotification(text);
          });
          break;
        case 'denied':
          return;
        default:
          showNotification(text);
      }
    } else {
      alert(text);
    }
  }

   /* ACOMPANHE A EXPLICAÇÃO */

  /**
   * Funções que precisam ser executadas no carregamento da página
   */
  loadTasks();

  /**
   * Registrando eventos
   *
   * TODO:
   * [X] Clique do botão de adicionar tarefa
   * [X] Clique do botão de descartar tarefa
   * [X] Reações do input de texto
   * [X] Permitir envio com a tecla Enter
   */

  btnAdd.addEventListener('click', newTask);
  btnDiscard.addEventListener('click', inputClear);
  inputDescription.addEventListener('input', validateInput);
  inputDescription.addEventListener('blur', validateInput);
  inputDescription.addEventListener('keypress', onEnter(newTask));
});