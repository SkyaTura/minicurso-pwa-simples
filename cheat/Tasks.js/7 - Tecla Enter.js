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