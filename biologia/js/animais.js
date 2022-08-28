var a = document.querySelector('#txtanimal')
var formulario = document.querySelector('#formulario')
var botao_form = document.querySelector('#botao-pesquisar')
var botao_limpar = document.querySelector('#limpar')
var resultado_animais = document.querySelector('#resultado_pesquisar')
var titulo_animal = document.querySelector('#titulo-animal')
var img = document.querySelector('#img-animal')

formulario.addEventListener('submit',enviar)
botao_limpar.addEventListener('click',remover)
botao_form.addEventListener('click',enviar)

function enviar(){
    event.preventDefault()
    var animais = a.value.toLowerCase().replaceAll(' ', '') 

    var lista_animais = {
        axolote:'axolote',
        sapo:['sapo-boi','sapoboi'],
        ra:['ra','rã'],
        salamandra:'salamandra',
        cobra_cega:['cobra-cega','cobracega'],
    }

    if(animais == lista_animais.axolote){

        res_animal(
            'Urodela (Caudata)',
            'Ambystomidae',
            'Ambyostoma',
            'Ambyostoma mexicanum',
            'Ambientes escuros e de água doce',
            'Girinos e pequenos invertebrados (insetos, crustáceos e minhocas)'
        )

        dados_animais('Axolote','axolote.jpg','img-axolote')

    }else if(animais == lista_animais.sapo[0] || animais == lista_animais.sapo[1]){

        res_animal(
            'Anura',
            'Bufonidae',
            'Rhinella',
            'R. marinaa',
            'Locais úmidos, como brejos, riachos, lagoas e igarapés',
            'Aranhas, besouros, pequenos gafanhotos, moscas, formigas e cupins. Espécies maiores podem comer pequenos pássaros e até outros sapos'
        )

        dados_animais('Sapo-boi','sapo.webp','img-sapo')

    }else if(animais == lista_animais.ra[0] || animais == lista_animais.ra[1]){

        res_animal(
            'Anura',
            'Ranidae',
            'Ranoidea',
            'Agalychnis callidryas ',
            'Vivem perto de corpos d`água, lagos, lagoas, cachoeiras e pântanos',
            'Pequenos artrópodes, insetos, vermes e outros animais'
        )

        dados_animais('Rã','ra.jpg','img-ra')

    }else if(animais == lista_animais.salamandra){

        res_animal(
            'Urodela',
            'Salamandridae',
            'Salamandra','Salamandra salamandra',
            'Algumas espécies vivem em cavernas; temperatura e umidade constantes favorecem o habitat das espécies',
            'Pequenos animais, como insetos, larvas de outros animais, crustáceos, pequenos peixes, entre outros.'
        )

        dados_animais('Salamandra','salamandra.jpg','img-salamandra')

    }else if(animais == lista_animais.cobra_cega[0] || animais == lista_animais.cobra_cega[1]){

        res_animal(
            'Gymnophiona',
            'Typhlopidae',
            'Lissanfíbio',
            'Sinphonops annulatus',
            'vivem enterrados (hábito fossorial) ou na superfície de solos úmidos','Vivem enterrados (hábito fossorial) ou na superfície de solos úmidos',
            'Pequenos invertebrados'
        )

        dados_animais('Cobra-cega','cobra-cega.webp','img-cobra-cega')

    }

    focar()
    
    return lista_animais
    
}


//FUNCOES


function focar(){
    a.value = ''
    a.focus()
}

function remover(){
    event.preventDefault()

    limpar()
    focar()
}

function limpar(){  
    resultado_animais.innerHTML = ''
    img.src = ''
    titulo_animal.innerHTML = ''
    img.classList.remove('img-axolote','img-sapo','img-ra','img-salamandra','img-cobra-cega')
}

function res_animal(ordem,familia,genero,especie,habitat,alimentacao){
    return resultado_animais.innerHTML += `
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

function dados_animais(titulo,imagem,classe_foto){
    titulo_animal.textContent = titulo
    img.src = `imagens/animais/${imagem}`
    img.classList.add(`${classe_foto}`)
}

function funcao_listaAnimais(){
    var lista_animais = {
        axolote:'axolote',
        sapo:['sapo-boi','sapoboi'],
        ra:['ra','rã'],
        salamandra:'salamandra',
        cobra_cega:['cobra-cega','cobracega'],
    }

    return lista_animais
}
