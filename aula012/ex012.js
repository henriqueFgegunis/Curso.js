var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`agora sao exatamente ${hora}:${minutos} hrs`)
if (hora >= 6) {
    console.log(`bom dia...`)
}
else if (hora >= 18) {
    console.log(`boa tarde...`)
}
else if  (hora > 0 || hora <= 5) {
    console.log(`boa madrugada...`)
}
else  {
    console.log(`boa noite...`)
}
