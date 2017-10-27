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
