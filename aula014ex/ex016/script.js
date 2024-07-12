function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');
  
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
      res.innerHTML = 'Impossível contar!';
    } else {
      res.innerHTML = 'Contando: <br>';
      let i = Number(ini.value);
      let f = Number(fim.value);
      let p = Number(passo.value);
      if (p >= 0) {
        alert('passo 0 ou 0- invalido consideramos 0 igual a 1')
        p = 1
      }
      if (p <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1');
        p = 1;
      }
  
      if (i < f) {
        // Contagem crescente
        for (let c = i; c <= f; c += p) {
          res.innerHTML += `${c} \u{1F449}`;
        }
      } else {
        // Contagem regressiva
        for (let c = i; c >= f; c -= p) {
          res.innerHTML += `${c} \u{1F448}`;
        }
      }
  
      res.innerHTML += '\u{1F3C1}';
    }
  }
/*function contar() {
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
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} + ${p} \u{27A1} `;}
                //contagem regresiva
        } else{
            for (let c = i;c >= f; c -= p) {
                res.innerHTML = `${c}\u{1f449}`;
            }
        }

    }

}
*/
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
