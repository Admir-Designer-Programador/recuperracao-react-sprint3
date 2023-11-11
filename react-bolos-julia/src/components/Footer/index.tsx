// estilizacao
import "./style.css";

// Rotas
import { Link } from "react-router-dom";

// images
import imgwhats from "../../assets/img/whats 1.png";
import imgface from "../../assets/img/face 1.png";
import imginstag from "../../assets/img/instag 1.png";

function Footer() {
    return (
        <footer>
            <div className="container footer_container">
                <p>Todos os direitos reservados ®</p>
                {/* tag unitaria */}
                {/* Imagem sempre precisa ser importada */}
                <div>
                    <Link to={"#"}><img src={imgwhats} alt="" /></Link>
                    <Link to={"#"}><img src={imgface} alt="" /></Link>
                    <Link to={"#"}><img src={imginstag} alt="" /></Link>
                </div>
            </div>
        </footer>
    );
}


{/* // O componete Footer pode ser chamado em outros lugares pelo export*/}
export default Footer; 
