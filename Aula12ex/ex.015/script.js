function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value > ano)){
        alert('[ERRO] Verifique os dados e tente novemente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        gênero = 'homem'
        if (idade >= 0 && idade<10 ){
            //criança
            img.setAttribute('src', 'foto-bebehomem.png')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'foto-jovemhomem.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'fotohomem.png')
        }else {
            //idoso
            img.setAttribute('src', 'foto-senhor.png')
        }
       } else if (fsex[1].checked){
        gêmero = 'mulher'
        if (idade >= 0 && idade<10 ){
            //criança
            img.setAttribute('src', 'foto-bebemulher.png')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'foto-jovemmulher.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'foto-mulher.png')
        }else {
            //idoso
            img.setAttribute('src', 'foto-senhora.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild (img)
    }
    }