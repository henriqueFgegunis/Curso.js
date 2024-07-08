function contar() {
    var ini = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Valor inválido...');
    } else {
        res.innerHTML = `contando...`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(oasso.value)
    }
}
