// estilizacao
import "./style.css";

// Rotas
import { Link } from "react-router-dom";

// images
import imglogo from "../../assets/img/logo 1.png";

function Header() {
    return (
        <header>
            <div className="container header_container">
                <div className="linha1">
                    {/* tag unitaria */}
                    {/* Imagem sempre precisa ser importada */}
                    <img src={imglogo} alt="logo bolos julia" />
                    <nav>
                        <Link to={"/"}>Home</Link>
                        <Link to={"Cadastrobolo"}>Cadastrar</Link>
                        <Link to={"/ListaBolo"}>Bolos</Link>
                    </nav>
                </div>
                <div className="linha2">
                    <p>Seja bem vindo ao bolos Júlia</p>
                </div>
            </div>
        </header>
    );
}
// O componete header pode ser chamado em outros lugares pelo export
export default Header;