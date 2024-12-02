const urlBase = 'https://bcclp-2-back-end.vercel.app/categoria';
const urlCatInProd = 'https://bcclp-2-back-end.vercel.app/catInProd'

//const urlBase = 'http://localhost:4000/categoria';
//const urlCatInProd = 'http://localhost:4000/catInProd';

export async function gravarCategoria(categoria){
    const resposta = await fetch(urlBase,{
        'method':"POST",
        'headers':{
            "Content-Type":"application/json"
        },
        'body':JSON.stringify(categoria)
    });
    
    const resultado = (await resposta).json();
    return resultado;
}

export async function alterarCategoria(categoria) {
    const resposta = await fetch(urlBase+"/"+categoria.codigo,{
        'method':"PUT",
        'headers':{
            "Content-Type":"application/json"
        },
        'body':JSON.stringify(categoria)
    });
    
    const resultado = (await resposta).json();
    return resultado;
}

export async function excluirCategoria(categoria) {
    const resposta = await fetch(urlBase+'/'+categoria.codigo,{
        'method':"DELETE"
    });
    
    const resultado = (await resposta).json();
    return resultado;
    
}

export async function consultarAllCategoria() {
    const resposta = await fetch(urlBase,{
        'method':"GET"
    });
    
    const resultado = (await resposta).json();
    return resultado;
    
}

export async function consultaCategoriaInProdutos(){
    const resposta = await fetch(urlCatInProd,{
        'method':"GET"
    });
    
    const resultado = (await resposta).json();
    return resultado;
}
