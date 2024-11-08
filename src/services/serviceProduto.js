const urlBase = 'https://bcclp-2-back-end.vercel.app/produtos';

export async function gravarProduto(produto){
    const resposta = await fetch(urlBase,{
        'method':"POST",
        'headers':{
            "Content-Type":"application/json"
        },
        'body':JSON.stringify(produto)
    });
    
    const resultado = (await resposta).json();
    return resultado;
}

export async function alterarProduto(produto) {
    const resposta = await fetch(urlBase+"/"+produto.codigo,{
        'method':"PUT",
        'headers':{
            "Content-Type":"application/json"
        },
        'body':JSON.stringify(produto)
    });
    
    const resultado = (await resposta).json();
    return resultado;
}

export async function excluirProduto(produto) {
    const resposta = await fetch(urlBase+'/'+produto.codigo,{
        'method':"DELETE"
    });
    
    const resultado = (await resposta).json();
    return resultado;
    
}

export async function consultarAllProduto() {
    const resposta = await fetch(urlBase,{
        'method':"GET"
    });
    
    const resultado = (await resposta).json();
    return resultado;
    
}
