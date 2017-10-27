window.addEventListener('load', function() {
  /**
   * TODO: Escopo do projeto
   * [ ] Carregar os elementos da página no código
   * [ ] Criar uma função para validar o input
   * [ ] Criar uma função para habilitar os botões
   * [ ] Criar uma função para limpar o input
   * [ ] Criar uma função para transformar o texto em cartão
   * [ ] Criar uma função para o botão de criar tarefa
   * [ ] Criar uma função para permitir o envio do card pela tecla enter
   * [ ] Criar uma função para salvar as tarefas no navegador
   * [ ] Criar uma função para ler as tarefas do navegador
   * [ ] Criar uma função para testar a existência de uma tarefa
   * [ ] Criar uma função para carregar todas as tarefas salvas
   * [ ] Criar uma função para completar uma tarefa
   * [ ] Brincar com a API de notificações
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
   * [ ] taskList - Lista de tarefas
   * [ ] taskTemplate - Template das tarefas
   * [ ] inputDescription - Input com a descrição da tarefa
   * [ ] btnAdd - O botão de adicionar uma tarefa
   * [ ] btnDiscard - O botão para descartar a nova tarefa
   */

  /**
   * Função para validar o input
   *
   * TODO:
   * [ ] Testar o texto do input
   * [ ] Testar a existência da tarefa
   */
  function validateInput () {
    //
  }

  /**
   * Função para habilitar os botões
   */
  function enableButtons(state) {
    //
  }

  /**
   * Função para limpar o input
   */
  function inputClear() {
    //
  }

  /**
   * Função para transformar o texto em cartão
   *
   * TODO:
   * [ ] Importar o template
   * [ ] Criar variáveis para os elementos a serem modificados
   * [ ] Inserir o texto
   * [ ] Inserir ação de clique na tarefa
   */
  function createCard(text) {
    //
  }

  /**
   * Criar uma função para o botão de criar tarefa
   *
   * TODO:
   * [ ] Ler o texto do input
   * [ ] Validar o input
   * [ ] Criar o cartão
   * [ ] Desabilitar os botões
   * [ ] Limpar o input
   * [ ] Salvar a tarefa no armazenamento
   */
  function newTask() {
    let text = inputDescription.value;
    if (!validateInput()) return;
    createCard(text);
    saveTask(text);
    enableButtons(false);
  }

  /**
   * Criar uma função para permitir o envio do card pela tecla enter
   *
   * TODO:
   * [ ] Retornar uma função que recebe evento como parâmetro
   * [ ] Essa função deve testar o keyCode do evento e executar um método passado como parâmetro
   *
   * TIPS: O código para a tecla Enter é 13
   */
  function onEnter(method) {
    return function(event){
      //
    }
  }

  /**
   * Funções para manipular o armazenamento local
   *
   * TIPS: O armazenamento local só permite strings, mas neste código trabalhamos com objetos
   */
  function getStorage() {
    //
  }

  function saveStorage(tasks) {
    //
  }

  function taskExists(task) {
    //
  }

  /**
   * Função para salvar uma tarefa no armazenamento
   */

  function saveTask(text) {
    //
  }

  /**
   * Função para temover uma tarefa armazenadas
   */

  function removeTask(text) {
    //
  }

  /**
   * Função para carregar todas as tarefas salvas
   */
  function loadTasks() {
    //
  }

  /**
   * Função para finalizar uma tarefa
   *
   * TODO:
   * [ ] Remover a tarefa do armazenamento local
   * [ ] Criar animação de remoção
   * [ ] Apagar o elemento
   */
  function completeTask(el, text) {
    //
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

  /**
   * Registrando eventos
   *
   * TODO:
   * [ ] Clique do botão de adicionar tarefa
   * [ ] Clique do botão de descartar tarefa
   * [ ] Reações do input de texto
   * [ ] Permitir envio com a tecla Enter
   */
});