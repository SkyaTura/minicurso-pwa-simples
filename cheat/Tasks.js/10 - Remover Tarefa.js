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