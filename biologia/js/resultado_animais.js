/*
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
</ul>


var axolote_resultado1 = `
<ul class="resultado-lista-animais">
        <li><strong>Reino:</strong> Animalia</li>
        <li><strong>Filo:</strong> Chordata</li>
        <li><strong>Classe:</strong> Amphibia</li>
        <li><strong>Ordem:</strong> Urodela (Caudata)</li>
        <li><strong>Familia:</strong> Ambystomidae</li>
        <li><strong>Gênero:</strong> Ambyostoma</li>
        <li><strong>Espécie:</strong> Ambyostoma mexicanum</li>
        <li><strong>Habitat:</strong> Ambientes escuros e de água doce</li>
        <li><strong>Alimentação:</strong> Girinos e pequenos invertebrados (insetos, crustáceos e minhocas)
        </li>  
</ul>`
*/

var Axolote = [

    'Animalia',
    'Chordata',
    'Amphibia',
    'Urodela',
    'Ambyostoma',
    'Ambystomidae',
    'Ambyostoma mexicanum',
    'Ambientes escuros e de água doce',
    'Girinos e pequenos invertebrados (insetos, crustáceos e minhocas)'

]

var Sapo = {

    Reino:'Animalia',
    Filo:'Chordata',
    Classe:'Amphibia',
    Ordem:'Anura',
    Genero:'Rhinella',
    Familia:'Bufonidae',
    Espécie:'R. marinaa',
    Habitat:'Locais úmidos, como brejos, riachos, lagoas e igarapés',
    Alimentação:'Aranhas, besouros, pequenos gafanhotos, moscas, formigas e cupins. Espécies maiores podem comer pequenos pássaros e até outros sapos'

} 

function res_animal2(animal){
    
    var dados = [
        animal.Reino,
        animal.Filo,
        animal.Classe,
        animal.Ordem,
        animal.Genero,
        animal.Familia,
        animal.Espécie,
        animal.Habitat,
        animal.Alimentação
    ]

    return dados
}

console.log(res_animal2(Axolote));