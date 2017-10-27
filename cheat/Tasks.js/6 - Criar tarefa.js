// PRIMEIRA IMPLEMENTAÇÃO

/**
 * Criar uma função para o botão de criar tarefa
 *
 * TODO:
 * [X] Ler o texto do input
 * [X] Validar o input
 * [X] Criar o cartão
 * [X] Desabilitar os botões
 * [X] Limpar o input
 * [ ] Salvar a tarefa no armazenamento
 */
function newTask() {
  let text = inputDescription.value;
  if (!validateInput()) return;
  createCard(text);
  enableButtons(false);
}

// SEGUNDA IMPLEMENTAÇÃO

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
}