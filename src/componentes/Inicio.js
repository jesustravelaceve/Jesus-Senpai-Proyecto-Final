import Logo from '../Imagenes/logo.png';
import '../inicio.css';
import {
    Link
} from "react-router-dom";
function Inicio() {//prueba
    return (
        <div>
            <header>
                <Link to="/"><img src={Logo} /></Link>
            </header>
            <div className="portada">
                <div className="botones">
                    <Link to="/Ordenar"><button className="btninicio">Registrar Pedidos</button></Link>

                </div>
                <div className="botones">
                <Link to="/ConsultarOrden"> <button className="btninicio">Consultar Pedidos</button></Link>
                </div>
            </div>
        </div>


    );
}
export default Inicio;