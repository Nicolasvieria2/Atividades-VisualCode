function carregar() 
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = 9
//var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas. `
if (hora >= 0 && hora < 12){
    //bom dia !!
    img.src = 'foto-manha.png'
    document.body.style.background = '#e2c9f'
} else if (hora >= 12 && hora < 18) {
    img.src = 'foto-tarde.png'
    //boa tarde !
} else {
    img.src = 'foto-noite.png'
    //boa noite!!
}