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