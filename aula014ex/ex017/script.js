
function tabuada() {
    let num = document.getElementById('txtn').value;
    let tab = document.getElementById('seltab');

    if (num.length === 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(num);
        tab.innerHTML = ''; // Limpar as opções existentes


        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            tab.appendChild(item); //  Adicionar a opção ao elemento select
        }
    }
}
