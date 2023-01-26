import '../assets/CadastroFuncionarios.css'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from '../../services/api'
import { useContext } from 'react';
import { GlobalState } from '../GlobalState';
import Modal from 'react-modal';
import estados_cidades from '../../services/estados_cidades/estados-cidades.json';
import { cpf } from 'cpf-cnpj-validator'

const initialState = {
    nome: "",
    CPF: "",
    dataNascimento: "",
    telefone: "",
    endereco: "",
    email: "",
    cidade: {
        UF: "",
        nome: ""
    }
}
const CadastroFuncionario = () => {
    const state = useContext(GlobalState);
    const [cadastroFuncionario, setCadastroFuncionario] = useState(initialState);
    const [funcionarios] = state.funcionariosAPI.funcionario;
    const navigate = useNavigate();
    const param = useParams();
    const [onEdit, setOnEdit] = useState(false);
    const [uf, setUf] = useState('')
    const [endereco, setEndereco] = useState({})

    useEffect(() => {
        if (param.id) {
            setOnEdit(true);
            funcionarios.forEach(f => {
                if (f.idFuncionario === Number(param.id)) {
                    setCadastroFuncionario(f);
                }
            })
        } else {
            setOnEdit(false);
            setCadastroFuncionario(initialState);
        }
    }, [param.id, funcionarios]);

    const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    //console.log(estados_cidades.estados.filter( el => el.sigla === uf))

    async function handleSubmit(e) {
        e.preventDefault();
        //console.log({ ...cadastroFuncionario, cidade: endereco })
        console.log(isEmail(cadastroFuncionario.email))
        if (cpf.isValid(cadastroFuncionario.CPF) && isEmail(cadastroFuncionario.email)) {
            //console.log('ok')
            try {
                if (onEdit) {
                    await axios.put(`/funcionario/update/${cadastroFuncionario.idFuncionario}`, { ...cadastroFuncionario, cidade: endereco })
                        .then((req, res) => {
                            setTimeout(() => {
                                navigate('/');
                                window.location.reload();
                            }, 1500);
                        })
                }
                else {
                    await axios.post('/funcionario/create', { ...cadastroFuncionario, cidade: endereco })
                        .then((req, res) => {
                            setTimeout(() => {
                                alert('Funcionario criado com sucesso!');
                                navigate('/');
                                window.location.reload();
                            }, 2000);
                        }).catch(err => {
                            console.log(err)
                        })
                }
            } catch (error) {
                alert(error);
            }
        } else {
            alert('CPF ou email não são validos!')
        }
    }

    const handleChangeInput = e => {
        const { name, value } = e.target;
        if (name === 'cidade') {
            setEndereco({ ...endereco, nome: value })
        }
        else if (name === 'telefone') {
            const newVal = value;
            const formatTel = newVal.replace(/\D/g, "").replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2").replace(/(-\d{4})\d+?$/, "$1");

            setCadastroFuncionario({ ...cadastroFuncionario, [name]: formatTel })
        }
        else if (name === 'CPF') {
            const notFormattedCpf = value
            const formattedCpf = notFormattedCpf.replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1')
            setCadastroFuncionario({ ...cadastroFuncionario, [name]: formattedCpf })
        } else {
            setCadastroFuncionario({ ...cadastroFuncionario, [name]: value });
        }
    }

    const setEstadoCidade = e => {
        setUf(e.target.value);
        if (e.target.name === 'estado') {
            setEndereco({ ...endereco, UF: e.target.value })
        }
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
                <p>Cadastro de funcionário</p>

            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <p>Nome:</p>
                        <input className="inputestilocadastrofuncionario" name='nome' required value={cadastroFuncionario.nome} onChange={handleChangeInput} />
                    </div>

                    <div className="input">
                        <p>CPF:</p>
                        <input className="inputestilocadastrofuncionario" name='CPF' value={cadastroFuncionario.CPF} onChange={handleChangeInput} disabled={onEdit} />
                    </div>
                    <div className="input">
                        <p>Nascimento:</p>
                        <input className="inputestilocadastrofuncionario" name='dataNascimento' type='date' required value={cadastroFuncionario.dataNascimento} onChange={handleChangeInput} />
                    </div>


                    <div className="input">
                        <p>Telefone:</p>
                        <input className="inputestilocadastrofuncionario" name='telefone' type='text' value={cadastroFuncionario.telefone} onChange={handleChangeInput} />
                    </div>

                    <div className="input">
                        <p>Endereço:</p>
                        <input className="inputestilocadastrofuncionario" name='endereco' required value={cadastroFuncionario.endereco} onChange={handleChangeInput} />
                    </div>
                    <div className="input">

                        {onEdit ?
                            <>
                                <label htmlFor="estado"><p>Estado:</p></label>
                                <select name="estado" id='estado' className="inputestilocadastrofuncionario" required onChange={setEstadoCidade}>
                                    <option value={cadastroFuncionario.cidade.UF}>{cadastroFuncionario.cidade.UF}</option>
                                    {estados_cidades.estados.map(el => (
                                        <option key={el.sigla} value={el.sigla}>{el.nome}</option>
                                    ))}
                                </select>

                                <label htmlFor="cidade"><p>Cidade:</p></label>
                                <select name="cidade" id='cidade' className="inputestilocadastrofuncionario" required onChange={handleChangeInput}>
                                    <option value={cadastroFuncionario.cidade.nome}>{cadastroFuncionario.cidade.nome}</option>
                                    {
                                        uf === ''
                                            ? null
                                            :
                                            estados_cidades.estados.map(el => (
                                                el.sigla === uf ?
                                                    el.cidades.map(e => (
                                                        <option key={e} value={e}>{e}</option>
                                                    ))
                                                    : null
                                            ))
                                    }
                                </select>
                            </>
                            :
                            <><label htmlFor="estado"><p>Estado:</p></label>
                                <select name="estado" id='estado' className="inputestilocadastrofuncionario" required onChange={setEstadoCidade}>
                                    <option value="">Selecione um Estado</option>
                                    {estados_cidades.estados.map(el => (
                                        <option key={el.sigla} value={el.sigla}>{el.nome}</option>
                                    ))}
                                </select>

                                <label htmlFor="cidade"><p>Cidade:</p></label>
                                <select name="cidade" id='cidade' className="inputestilocadastrofuncionario" required onChange={handleChangeInput}>
                                    <option value="">{uf === '' ? 'Selecione um estado antes' : 'Selecione uma Cidade'}</option>
                                    {
                                        uf === ''
                                            ? null
                                            :
                                            estados_cidades.estados.map(el => (
                                                el.sigla === uf ?
                                                    el.cidades.map(e => (
                                                        <option key={e} value={e}>{e}</option>
                                                    ))
                                                    : null
                                            ))
                                    }
                                </select> </>
                        }

                        {/* <p>Estado:</p>
                        <input className="inputestilocadastrofuncionario" name='estado' required value={cadastrofuncionario.cidade.UF} onChange={handleChangeInput} />
                        <p>Cidade:</p>
                        <input className="inputestilocadastrofuncionario" name='cidade' required value={cadastrofuncionario.cidade.nome} onChange={handleChangeInput} /> */}
                    </div>
                    <div className="input">
                        <p>Email:</p>
                        <input type="email" className="inputestilocadastrofuncionario" name='email' required value={cadastroFuncionario.email} onChange={handleChangeInput} />
                    </div>
                    <div className="buttonline">
                        <button className="button" type='submit'>Salvar</button>
                        <Link to='/' className="button2"> <span>
                            Voltar</span></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastroFuncionario;