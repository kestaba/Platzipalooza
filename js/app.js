$(document).foundation()

$('[data-toggle-dia]').click(function (ev) { // () => es lo mismo que function () o function nombre() para utilizar el nuevo estándar de js (arrow functions).
    
    var panel = $(this).data('toggleDia')// 1. const en lugar de var para utilizar el nuevo estándar de ECMAScript.
                                          // 2. Para acceder al atributo se coloca utilizando CamelCase. No hace falta el data- pues está implicito para todos los atributos data.    
    
    $('#lineup-tabs').foundation('selectTab', panel)
})

const $offCanvas = $('#offCanvas')
const $sticky = $('#sticky')

$offCanvas.find('li').click(function (ev){
    $offCanvas.foundation('close')
    setTimeout(function(){
        $sticky.css('left', '0px')        
    }, 300)
})