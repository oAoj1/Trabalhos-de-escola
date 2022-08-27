var formulario = Puxar_um('#formulario')
var botao_form = Puxar_um('#botao-pesquisar')
var resultado_animais = Puxar_um('#resultado_pesquisar')
var a = Puxar_um('#txtanimal')

formulario.addEventListener('submit',enviar)
botao_form.addEventListener('click',enviar)

function enviar(){
    event.preventDefault()
    var animais = a.value.toLowerCase().replaceAll(' ', '')
    var img = Puxar_um('#img-animal')
    var titulo_animal = Puxar_um('#titulo-animal')

    var lista_animais = {
        axolote:'axolote',
        sapo:['sapo-boi','sapoboi'],
        ra:['ra','rã'],
        salamandra:'salamandra',
        cobra_cega:['cobra-cega','cobracega'],
    }

    if(animais.length == 0){

        resultado_animais.innerHTML = '<p class="insert">Insira um valor</p>'
        img.src = ''
        img.classList.remove('img-axolote','img-sapo','img-ra','img-salamandra','img-cobra-cega')

    }else if(animais == lista_animais.axolote){

        res_animal('Urodela (Caudata)','Ambystomidae','Ambyostoma','Ambyostoma mexicanum','Ambientes escuros e de água doce','Girinos e pequenos invertebrados (insetos, crustáceos e minhocas)')

        titulo_animal.textContent = 'Axolote'
        img.src = 'imagens/animais/axolote.jpg'
        img.classList.add('img-axolote')

    }else if(animais == lista_animais.sapo[0] || animais == lista_animais.sapo[1]){

        res_animal('Anura','Bufonidae','Rhinella','R. marinaa','Locais úmidos, como brejos, riachos, lagoas e igarapés','Aranhas, besouros, pequenos gafanhotos, moscas, formigas e cupins. Espécies maiores podem comer pequenos pássaros e até outros sapos')

        titulo_animal.textContent = 'Sapo-boi'
        img.src = 'imagens/animais/sapo.webp'
        img.classList.add('img-sapo')

    }else if(animais == lista_animais.ra[0] || animais == lista_animais.ra[1]){

        res_animal('Anura','Ranidae','Ranoidea','Agalychnis callidryas ','Vivem perto de corpos d`água, lagos, lagoas, cachoeiras e pântanos','Pequenos artrópodes, insetos, vermes e outros animais')

        titulo_animal.textContent = 'Rã'
        img.src = 'imagens/animais/ra.jpg'
        img.classList.add('img-ra')

    }else if(animais == lista_animais.salamandra){

        res_animal('Urodela','Salamandridae','Salamandra','Salamandra salamandra','Algumas espécies vivem em cavernas; temperatura e umidade constantes favorecem o habitat das espécies','Pequenos animais, como insetos, larvas de outros animais, crustáceos, pequenos peixes, entre outros.')

        titulo_animal.textContent = 'Salamandra'
        img.src = 'imagens/animais/salamandra.jpg'
        img.classList.add('img-salamandra')

    }else if(animais == lista_animais.cobra_cega[0] || animais == lista_animais.cobra_cega[1]){

        res_animal('Gymnophiona','Typhlopidae','Lissanfíbio','Sinphonops annulatus','vivem enterrados (hábito fossorial) ou na superfície de solos úmidos','Vivem enterrados (hábito fossorial) ou na superfície de solos úmidos','Pequenos invertebrados')

        titulo_animal.textContent = 'Cobra-cega'
        img.src = 'imagens/animais/cobra-cega.webp'
        img.classList.add('img-cobra-cega')

    }else{

        resultado_animais.innerHTML = 
        `<p class="error">
            Animal não listado, ou valor inexistente ou incorreto
        </p>`
        
        resultado_animais.innerHTML += 
        `<ul class="dica">
            <li>Seu animal não é um anfibio</li>
        </ul>`

        img.src = ''
        titulo_animal.textContent = ''
        img.classList.remove('img-axolote','img-sapo','img-ra','img-salamandra','img-cobra-cega')

    }

    a.value = ''
    a.focus()

    return lista_animais
}

function res_animal(ordem,familia,genero,especie,habitat,alimentacao){
    return resultado_animais.innerHTML = `
    <ul class="resultado-lista-animais">
        <li><strong>Reino:</strong> Animalia</li>
        <li><strong>Filo:</strong> Chordata</li>
        <li><strong>Classe:</strong> Amphibia</li>
        <li><strong>Ordem:</strong> ${ordem}</li>
        <li><strong>Familia:</strong> ${familia}</li>
        <li><strong>Gênero:</strong> ${genero}</li>
        <li><strong>Espécie:</strong> ${especie}</li>
        <li><strong>Habitat:</strong> ${habitat}</li>
        <li><strong>Alimentação:</strong> ${alimentacao}</li>  
    </ul>`
}
