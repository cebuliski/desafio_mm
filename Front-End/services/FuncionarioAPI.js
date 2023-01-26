import { useState, useEffect } from "react";
import axios from './api'

function FuncionarioAPI() {
    const [funcionario, setFuncionario] = useState([]);

    useEffect(()=>{
        const getFuncionario = async ()=>{
            const res = await axios(`/funcionario/list`);
            setFuncionario(res.data);
        }
        getFuncionario();
    }, []);

    return {
        funcionario: [funcionario, setFuncionario]
    }
}

export default FuncionarioAPI;