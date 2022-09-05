function validar_objetivos(objetivo){
    if(objetivo.checked){
        return true
    }else{
        return false
    }
}

function nome_vazio(nome){
    if(nome.length > 0){
        return true
    }else{
        return false
    }
}

function idade_vazia(idade){
    if(idade.length > 0){
        return true
    }else{
        return false
    }
}

function validar_idade(idade){
    if(idade.value >= 0 && idade.value <= 150){
        return true
    }else{
        return false
    }
}

function peso_vazio(peso){
    if(peso.length > 0){
        return true
    }else{
        return false
    }
}

function validar_peso(peso){
    if(peso.value >= 0 && peso.value <= 700){
        return true
    }else{
        return false
    }
}

function altura_vazia(altura){
    if(altura.length > 0){
        return true
    }else{
        return false
    }
}

function validar_altura(altura){
    if(altura.value >= 0 && altura.value <= 3.00){
        return true
    }else{
        return false
    }
}