//estilização
import { useState } from "react";
import api from "../../utils/api";
import "./style.css";

//hooks


//api



function cadastrarBolo() {

//Setter -> Definir Valor
    const [ nome, setNome ]= useState<string>("")
    const [ valor, setValor ]= useState<number>(0)
    const [ imagem, setImagem ]= useState<any>()
    const [ ingredientes, setIngredientes ]= useState<string>("")
    const [ cobertura, setCobertura ]= useState<string>("")

    //Hoisting
    function verificarCampoUpload(event: any) {
         setImagem(event.target.files[0])
    }

const cadastrarBolo = (event: any) => {
    event.preventDefault()

    const formData = new FormData()

    formData.append("nome", nome)
    formData.append("valor", valor.toString())
    formData.append("user_img", imagem)
    formData.append("ingredientes", ingredientes)
    formData.append("cobertura", cobertura)

    api.post("bolos", formData).then(response => {
        console.log(response)
        alert("Bolo criado com Sucesso!")
    }).catch( error => {
        console.log("Erro na criacao: " + error);
    })
  
}

    return (
        <main>
            <section className="cadastro">
                <div className="glass">
                    <h1>Cadastro de Bolos</h1>
                    <form method="POST" onSubmit={ cadastrarBolo }>
                        <div>
                            <label htmlFor="nome">Nome do Bolo:</label>
                            <input
                                className="input_estilo"
                                name="nome"
                                type="text"
                                onChange={ event => setNome(event.target.value) }
                            />
                        </div>

                        <div>
                            <label htmlFor="valor">Valor do bolo:</label>
                            <input
                                className="input_estilo"
                                name="valor"
                                type="text"
                                onChange={ event => setValor( parseFloat(event.target.value)) }
                                id="valor"
                            />
                        </div>

                        <div>
                            <label htmlFor="imagem">Imagem:</label>
                            <input
                                className="input_estilo"
                                name="imagem"
                                type="file"
                                onChange={ verificarCampoUpload }
                                id="imagem"
                            />
                        </div>

                        <div>
                            <label htmlFor="ingredientes">Ingredientes:</label>
                            <textarea
                                className="input_estilo"
                                name="ingredientes"
                                onChange={ event => setIngredientes(event.target.value) }
                                id="ingredientes"
                            >
                            </textarea>
                        </div>
                        <div>
                            <label htmlFor="cobertura">Cobertura:</label>
                            <textarea
                                className="input_estilo"
                                name="cobertura"
                                onChange={ event => setCobertura(event.target.value) }
                                id="cobertura"
                            >
                            </textarea>
                        </div>

                        <input className="btn" type="submit" value="Cadastrar" />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default cadastrarBolo;