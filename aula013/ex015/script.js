function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.length == 0 || fano > ano) {
 window.alert(`[ERRO] verifique os dados e tente novamente...`)
    } else {
       window.alert('tudo ok')
    }
    
}



