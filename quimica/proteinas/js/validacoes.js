function validaçao(pessoa){
    var erros_lista = []

    if(pessoa.peso.length == 0){
        erros_lista.push('Preencher peso')
    }

    if(pessoa.altura.length == 0){
        erros_lista.push('Preencher altura')
    }

    if(pessoa.idade.length == 0){
        erros_lista.push('Preencher idade')
    }

    if(pessoa.nome.length == 0){
        erros_lista.push('Preencher nome')
    }

    return erros_lista
}

function exibir_erros(erros){
    var ul = document.querySelector('#erros')
    ul.innerHTML = ''

    erros.forEach(function(){
        var li = document.createElement('li')
        li.textContent = erros
        ul.appendChild(li)
    })
}
