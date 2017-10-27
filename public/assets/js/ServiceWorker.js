(function(){
  window.addEventListener('load', function() {
    /**
     * TODO:
     * [X] Verificar a disponibilidade da API de Service Worker
     * [X] Se disponível, registrar o Service Worker
     * [X] Exibir uma mensagem no console com os resultados da operação
     *
     * Ajuda: https://developers.google.com/web/fundamentals/primers/service-workers/?hl=pt-br#registrar_um_service_worker
     */
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then(function (registration) {
        console.log('ServiceWorker registrado com sucesso no escopo: ', registration.scope);
      }).catch(function (err) {
        console.log('O registro do ServiceWorker falhou: ', err);
      });
    } else {
      console.log('ServiceWorker indisponível para este navegador');
    }
  });
})();
