/**
 * Função para habilitar os botões
 */
function enableButtons(state) {
  btnAdd.disabled = !state;
  btnDiscard.disabled = !state;
}