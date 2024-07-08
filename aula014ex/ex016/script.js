function contar() {
    const ini = document.getElementById('txti').value;
    const fim = document.getElementById('txtf').value;
    const passo = document.getElementById('txtp').value;
    const res = document.getElementById('res');

    if (ini.length === 0 || fim.length === 0 || passo.length === 0) {
        alert('[ERRO] Falta Dados');
    } else {
        res.innerHTML = 'Contando...';
        const i = Number(ini);
        const f = Number(fim);
        const p = Number(passo);
        if (i < f) {
            for (let c = i; c <= f; c += p)
                res.innerHTML += `${c} + ${p} \u{27A1} `;

        }

    }

}
/*function contar() {
    var ini = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Falta Dados')

    } else {
        res.innerHTML = `contando...`
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        for(let c = i; c <= f;c += p){
         res.innerHTML += `${c} Passo ${p} \u{27A1} `  
        }
    }

}
 */
