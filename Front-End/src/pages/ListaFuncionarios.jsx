import '../assets/ListaFuncionarios.css'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalState } from '../GlobalState';
import { useContext } from 'react';
import { useState } from 'react';
import axios from '../../services/api'
import Modal from 'react-modal';

const ListaFuncionarios = () => {
    const state = useContext(GlobalState);
    const [funcionarios] = state.funcionariosAPI.funcionario;
    const [busca, setBusca] = useState('');
    const navigate = useNavigate();

    let buscaFuncionarios = funcionarios.filter(element => element.nome.toLowerCase().includes(busca.toLowerCase()));

    async function handleSubmit(e) {
        e.preventDefault();
    }

    async function handleDestroy(id) {
        console.log(id)
        await axios.delete(`/funcionario/delete/${id}`)
            .then((req, res) => {
                setTimeout(() => {
                    alert('Funcionario excluido com sucesso!');
                    navigate('/');
                    window.location.reload();
                }, 2000);
            })
    }
    const [modalIsOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <div className="header">
                <p>Lista de funcionários</p>

                {/*<Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <div className='modal-text'>
                        <div className='modalHeader'>
                            <h2> Lista de funcionarios </h2>
                            <img onClick={handleCloseModal} src="../icons/close.png" className="modalIcon" alt="Help" />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <p>
                            Para realizar a busca de um funcionario, é necessário utilizar a barra de pesquisa "Buscar funcionario", insira nela o nome do funcionario. Em seguida selecione o botão "editar" do funcionario desejado para abrir seus dados ou excluir para excluí-lo.
                        </p>
                    </div>
    </Modal>*/}
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="inputpedro">
                        <p>Buscar funcionário:</p>
                        <input className="inputestilofullfuncionario" value={busca} onChange={e => setBusca(e.target.value)} />
                    </div>
                    <div className="inputpedro">
                        <div className="inputestilo2">
                            {
                                buscaFuncionarios.map(c => (
                                    <div className="linefunc" key={c.idFuncionario}>
                                        <input className="showfunc" defaultValue={c.nome} readOnly />
                                        <Link to={`/funcionario/update/${c.idFuncionario}`} className="buttonedit" >Editar</Link>
                                        <button className="buttonfunc" onClick={() => handleDestroy(c.idFuncionario)}>Excluir</button>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    <div className="buttonline">
                        <Link to='/funcionario/cadastro' className="button">Cadastrar</Link>
                        {/* <Link to='/' className="button">Voltar</Link> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ListaFuncionarios;