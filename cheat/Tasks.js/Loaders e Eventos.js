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