// PRIMEIRA IMPLEMENTAÇÃo

/**
 * Função para validar o input
 *
 * TODO:
 * [X] Testar o texto do input
 * [ ] Testar a existência da tarefa
 */
function validateInput () {
  let text = inputDescription.value;
  if (text.length <= 0) {
    enableButtons(false);
    return false;
  }
  enableButtons(true);
  return true;
}


// SEGUNDA IMPLEMENTAÇÃO

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