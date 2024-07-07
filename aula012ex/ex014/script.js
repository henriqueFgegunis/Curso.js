function carregar(){
    var msg = window.document.getElementById(msg)
    var imagem = window.document.getElementById(imagem)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora sao ${hora} horas.`
}

