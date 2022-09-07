function altura_valida(altura){
    if(altura >= 0 && altura <= 3.00){
        return true
    }else{
        return false
    }
}

function altura_vazia(altura){
    if(altura.length == 0){
        return true
    }else{
        return false
    }
}

function peso_valido(peso){
    if(peso >= 0 && peso <= 1000){
        return true
    }else{
        return false
    }
}

function peso_vazio(peso){
    if(peso.length == 0){
        return true
    }else{
        return false
    }
}
