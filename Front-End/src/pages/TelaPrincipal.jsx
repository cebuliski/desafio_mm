import '../assets/TelaPrincipal.css'
import { Link } from 'react-router-dom'

const TelaPrincipal = () => {

    return (
        <div>
            <div className="container">
                <Link to='/funcionario' className="botoes"><p>Funcionarios</p></Link>
            </div>
            <div className="footer">
                <p>Ponta Grossa - Paraná</p>
            </div>
        </div>
    );
};

export default TelaPrincipal;