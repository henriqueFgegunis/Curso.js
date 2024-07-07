function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'Foto/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'Foto/tarde.jpg'
        document.body.style.background = '#b9846f'
    }
    else {
        img.src = 'Foto/noite.jpg'
      document.body.style.background = 'rgb(105, 78, 123)'
      
    } 
}