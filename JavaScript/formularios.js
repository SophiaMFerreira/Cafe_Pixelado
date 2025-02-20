function verificaPreenchimentoEventos(){
    let nome  = document.getElementById("nome")
    if(nome.value.length >= 3){
        nome.style.color = "#000000"                                                            //CORES DEFINIDAS NO CSS
        document.getElementById("labelNome").style.color = "#000000"
    } else {
        nome.style.color = "#008000"
        document.getElementById("labelNome").style.color = "#008000"
        window.alert("O Nome do Solicitante deve ser preenchido.")
    }
    let email  = document.getElementById("email")
    if(email.value.includes("@") && email.value.includes("mail.com")){
        email.style.color = "#000000"                                                            //CORES DEFINIDAS NO CSS
        document.getElementById("labelEmail").style.color = "#000000"
    } else {
        email.style.color = "#008000"
        document.getElementById("labelEmail").style.color = "#008000"
        window.alert("O Email deve ser válido.")
    }
    let telefone = document.getElementById("telefone")
    if (telefone.value != "") {
        if(telefone.value.search(/[A-Z]/) == -1 && telefone.value.search(/[a-z]/) == -1 && telefone.value.length == 13){
            telefone.style.color = "#000000"                                                            //CORES DEFINIDAS NO CSS
            document.getElementById("labelTelefone").style.color = "#000000"
        } else {
            telefone.style.color = "#008000"
            document.getElementById("labelTelefone").style.color = "#008000"
            window.alert("O telefone deve ser válido, não deve conter letras e ter o formato indicado.")
        }

    }
    
    let instagram = document.getElementById("instagram")
    let twiter = document.getElementById("twiter")
    if(instagram.value != ""){
        if(instagram.value.includes("@") == false){
            instagram.value = "@" + instagram.value
            console.log(instagram.value)
        }
    }
    if(twiter.value != ""){
        if(twiter.value.includes("@") == false){
            twiter.value = "@" + twiter.value
            console.log(twiter.value)
        }
    }
    let tiposEvento = document.getElementById("tipoEvento")
    if(tiposEvento.value != ""){
        tiposEvento.style.color = "#000000"                                                            //CORES DEFINIDAS NO CSS
        document.getElementById("labelTiposEvento").style.color = "#000000"
    } else {
        tiposEvento.style.color = "#008000"
        document.getElementById("labelTiposEvento").style.color = "#008000"
        window.alert("O tipo de evento deve ser preenchido.")
    }

    let descricaoEvento  = document.getElementById("descricao")
    if(descricaoEvento.value.trim() != "" && descricaoEvento.value.length > 10 ){
        descricaoEvento.style.color = "#000000"                                                            //CORES DEFINIDAS NO CSS
        document.getElementById("labelDescricaoEvento").style.color = "#000000"
    } else {
        descricaoEvento.style.color = "#008000"
        document.getElementById("labelDescricaoEvento").style.color = "#008000"
        window.alert("Deve haver uma descrição mesmo que breve para o evento.")
    }

    let numParticipantes  = document.getElementById("numParticipantes")
    if(parseInt(numParticipantes.value) >= 100){
        numParticipantes.style.color = "#000000"                                                            //CORES DEFINIDAS NO CSS
        document.getElementById("labelNumParticipantes").style.color = "#000000"
    } else {
        numParticipantes.style.color = "#008000"
        document.getElementById("labelNumParticipantes").style.color = "#008000"
        window.alert("Não aceitamos eventos com menos de 100 participantes.")
    }

    let datas  = document.getElementById("datas")
    if(datas.value.trim() != "" && datas.value.length >= 10 ){
        datas.style.color = "#000000"                                                            //CORES DEFINIDAS NO CSS
        document.getElementById("labelDatas").style.color = "#000000"
    } else {
        datas.style.color = "#008000"
        document.getElementById("labelDatas").style.color = "#008000"
        window.alert("Por favor, insira uma data, mesmo que ainda não tenha noção de datas possiveis, diga se pretende tratar isso posteriormente.")
    }

    let termosCondicoes  = document.getElementById("termosCondicoes")
    if(termosCondicoes.checked == false){
        termosCondicoes.style.color = "#008000"
        document.getElementById("labeltermosCondicoes").style.color = "#008000"
        window.alert("Não aceitamos eventos sem concentimento com nossos termos.")
    }
}

function botoesCondicionais(botao) {
    if (botao.name == "convidados") {
        let convidadoEspecial = document.getElementById("convidadoEspecial")
        let labelConvidadoEspecial = document.getElementById("labelConvidadoEspecial")

        if (botao.value == "Sim") {
            convidadoEspecial.disabled = false
            labelConvidadoEspecial.style.color = "#000000"
        } else {
            convidadoEspecial.disabled = true
            convidadoEspecial.checked = false
            labelConvidadoEspecial.style.color = "#808080"
        }
    } 

    if (botao.name == "premiacao") {
        let premioCafe = document.getElementById("premioCafe")
        let labelPremioCafe = document.getElementById("labelPremioCafe")

        if (botao.value == "Sim") {
            premioCafe.disabled = false
            labelPremioCafe.style.color = "#000000"
        } else {
            premioCafe.disabled = true
            premioCafe.checked = false
            labelPremioCafe.style.color = "#808080"
        }
    }

    if (botao.name == "infoChamariz") {
        let inputOutro = document.getElementById("outroAtrativo")
        let inputNada = document.getElementById("nenhumAtrativo")

        if (botao.id == "icOutro") {
            if (botao.checked) {
                inputOutro.disabled = false
                document.getElementById("labelOutroAtrativo").style.color = "#000000"
            } else {
                inputOutro.disabled = true
                inputOutro.value = ""
                document.getElementById("labelOutroAtrativo").style.color = "#808080"
            }
        }

        if (botao.id == "icNada") {
            if (botao.checked) {
                inputNada.disabled = false
                document.getElementById("labelNadaAtrativo").style.color = "#000000"
            } else {
                inputNada.disabled = true
                inputNada.value = ""
                document.getElementById("labelNadaAtrativo").style.color = "#808080"
            }
        }
    }
}

function enviarFormulario(tipo) {
    if (tipo == "eventos") {
        window.alert("Agradecemos sua participação e esperamos que aproveite nossos eventos! 💙")
    } 
    if (tipo == "feedback") {
        window.alert("Agradecemos sua participação! Sua opinião torna nosso café mais gostoso! 💙")
    }
}

function verificaPreenchimentoUsuario(){
    let infoDivulgacao  = document.getElementById("infoDivulgacao")
    if(infoDivulgacao.value != ""){
        infoDivulgacao.style.color = "#000000"                                                            //CORES DEFINIDAS NO CSS
        document.getElementById("labelInfoDivulgacao").style.color = "#000000"
    } else {
        infoDivulgacao.style.color = "#008000"
        document.getElementById("labelInfoDivulgacao").style.color = "#008000"
        window.alert("Por favor, conte como nos conheceu.")
    }
    let chamariz  = document.querySelectorAll('input[name="infoChamariz"]:checked')
    if(chamariz.length != 0){
        chamariz.style.color = "#000000"                                                            //CORES DEFINIDAS NO CSS
        document.getElementById("labelChamariz").style.color = "#000000"
    } else {
        chamariz.style.color = "#008000"
        document.getElementById("labelChamariz").style.color = "#008000"
        window.alert("Por favor, diga o que você gostou em nós.")
    }
    let experiencia  = document.getElementById("experiencia")
    if(experiencia.value.trim() != "" && experiencia.value.length > 10 ){
        experiencia.style.color = "#000000"                                                            //CORES DEFINIDAS NO CSS
        document.getElementById("labelExperiencia").style.color = "#000000"
    } else {
        experiencia.style.color = "#008000"
        document.getElementById("labelExperiencia").style.color = "#008000"
        window.alert("Conte um pouquinho sobre sua experiência, por favorzinho.")
    }
}