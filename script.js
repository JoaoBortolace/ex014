function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'foto_manha.png'
        document.body.style.background = '#c7d4b7'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'foto_tarde.png'
        document.body.style.background = '#ffb243'
    } else {
        img.src = 'foto_noite.png'
        document.body.style.background = '#0c294c'
        //BOA NOITE!
    }
}


