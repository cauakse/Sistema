import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "./estados.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { consultarAllProduto, excluirProduto, gravarProduto} from "../services/serviceProduto.js";


export const buscarProdutos = createAsyncThunk('buscarProdutos', async () => {
    const resultado = await consultarAllProduto();
    try {

        if (Array.isArray(resultado)) {
            return {
                "status": true,
                "mensagem": "Produtos recuperados com sucesso",
                "listaDeProdutos":resultado
            }
        }
        else {
            return {
                "status": false,
                "mensagem": "Erro ao recuperar os produtos do backend",
                "listaDeProdutos": []
            }
        }
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro :" + erro.message,
            "listaDeProdutos": []
        }

    }
});

const produtoReducer = createSlice({
    name: "produto",
    initialState: {
        estado: ESTADO.OCIOSO,
        mensagem: "",
        listaDeProdutos: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(buscarProdutos.pending, (state, action) => {
            state.estado=ESTADO.PENDENTE
            state.mensagem= "Processando requisição (buscando produtos)"
         })
         .addCase(buscarProdutos.fulfilled, (state, action) => { 
                if(action.payload.status){
                    state.estado=ESTADO.OCIOSO
                    state.mensagem=action.payload.mensagem
                    state.listaDeProdutos=action.payload.listaDeProdutos
                }
                else{
                    state.estado=ESTADO.ERRO;
                    state.mensagem=action.payload.mensagem
                    state.listaDeProdutos=action.payload.listaDeProdutos
                }
            })
            .addCase(buscarProdutos.rejected, (state, action) => {
                state.estado=ESTADO.ERRO
                state.mensagem=action.payload.mensagem
                state.listaDeProdutos=action.payload.listaDeProdutos
            })
            .addCase(apagarProduto.pending, (state, action)=>{
                state.estado = ESTADO.PENDENTE
                state.mensagem = "Processando requisição (Excluir produto)";
            })
            .addCase(apagarProduto.fulfilled, (state,action)=>{
                state.estado=ESTADO.OCIOSO
                state.mensagem= action.payload.mensagem
                state.listaDeProdutos = state.listaDeProdutos.filter((item)=>{
                    return item.codigo !== state.payload.produtoId
                })
                //altera a lista de produto??
            })
            .addCase(apagarProduto.rejected, (state,action)=>{
                state.estado=ESTADO.ERRO
                state.mensagem=action.payload.mensagem
            })
            .addCase(incluirProduto.pending, (state,action) =>{
                state.estado = ESTADO.PENDENTE
                state.mensagem = 'Processando a requisição (incluindo produto no back-end)'
            })
            .addCase(incluirProduto.fulfilled, (state,action)=>{
                if(action.payload.status){
                    state.estado = ESTADO.OCIOSO
                    state.mensagem = action.payload.mensagem
                    state.listaDeProdutos.push(action.payload.produtpo);
                }
                else
                {
                    state.estado = ESTADO.ERRO
                    state.mensagem = action.payload.mensagem
                }
            })
            .addCase(incluirProduto.rejected,(state,action)=>{
                state.estado = ESTADO.ERRO
                state.mensagem = action.payload.mensagem
            })
    }
})

export const apagarProduto= createAsyncThunk('apagarProduto', async (produto)=>{
    //dar previsibilidade  ao conteudo do payload
    try {
        const resultado = await excluirProduto(produto);
        return {
            "status": resultado.status,
            "mensagem": resultado.mensagem,
            "produtoId" : produto.codigo
        }
    } catch (erro) {
        return {
            "status": false,
            "mensagem": "Erro :" + erro.message,
        }
    
    }
});

export const incluirProduto = createAsyncThunk("incluirProduto", async (produto)=>{
    try{
        const resultado = await gravarProduto(produto);
        if(resultado.status){
            produto.codigo = resultado.codigo

            return{
                'status' : resultado.status,
                "mensagem" : resultado.mensagem,
                'produto' : produto
            }
        }
        else
        {
            return{
                'status' : resultado.status,
                "mensagem" : resultado.mensagem,
            }
        }
    }catch(e){
        return{
            "status" : false,
            "mensagem" : "Não foi possivel se comunicar com o back-end " + e.message
        }
    }
})

export default produtoReducer.reducer;