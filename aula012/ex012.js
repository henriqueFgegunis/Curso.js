var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`agora sao exatamente ${hora} hrs e ${minutos} minutos`)
if (hora < 12) {
    console.log(`bom dia...`)
}
else if (hora <= 18) {
    console.log(`boa tarde...`)
}
else if  (hora < 1) {
    console.log(`boa madrugada...`)
}
else  {
    console.log(`boa noite...`)
}
