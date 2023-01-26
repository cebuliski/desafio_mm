import { Request, Response } from "express";
import { cidadeRepository } from "../repositories/cidadeRepository";
import { funcionarioRepository } from '../repositories/funcionarioRepository'

export class FuncionarioController {
  async create(req: Request, res: Response) {
    //Criar funcionario
    let { nome, endereco, telefone, dataNascimento, CPF, email, cidade } = req.body

    if (!nome) {
      return res.status(400).json({ message: 'O nome é obrigatório' })
    }

    if (!endereco) {
      return res.status(400).json({ message: 'O endereço é obrigatório' })
    }

    if (!telefone) {
      return res.status(400).json({ message: 'O telefone é obrigatório' })
    }

    if (!dataNascimento) {
      return res.status(400).json({ message: 'A data de nascimento é obrigatória' })
    }

    if (!CPF) {
      return res.status(400).json({ message: 'O CPF é obrigatório' })
    }

    if (!email) {
      return res.status(400).json({ message: 'O e-mail é obrigatório' })
    }

    if (!cidade) {
      return res.status(400).json({ message: 'A cidade é obrigatória' })
    }

    dataNascimento = new Date(dataNascimento.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
    //console.log(dataNascimento)

    try {
      const exist = await cidadeRepository.find({where: {nome: cidade.nome}})

      if (exist.length === 0) {
        //console.log("criando novo")
        const newCidade = cidadeRepository.create({UF: cidade.UF, nome: cidade.nome});
        
        await cidadeRepository.save(newCidade);

        cidade = newCidade.idCidade
        //console.log('cidade if', cidade)
        
        const newFuncionario = funcionarioRepository.create({
          nome, endereco, telefone,
          dataNascimento, CPF, email, cidade
        })
  
        await funcionarioRepository.save(newFuncionario)
        //console.log("exist if", exist)
        //console.log("teste if", teste)
        return res.status(201).json(newFuncionario)

      }else{
        const getCity = await cidadeRepository.find({where: {nome: cidade.nome}})

        const teste = getCity.map( el => el.idCidade)
        cidade = teste[0]
        //console.log("cidade else", cidade)
        const newFuncionario = funcionarioRepository.create({
          nome, endereco, telefone,
          dataNascimento, CPF, email, cidade
        })

        console.log(newFuncionario)
  
        await funcionarioRepository.save(newFuncionario)
        return res.status(201).json(newFuncionario)
      }} catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' })
      }

  }

  //Editar funcionario
  async update(req: Request, res: Response) {

    let { nome, endereco, telefone, dataNascimento, CPF, email, cidade } = req.body
    let id_funcionario = req.params["id_funcionario"]

    dataNascimento = new Date(dataNascimento.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
    console.log(dataNascimento)

    try {
      /* const updateCliente = clienteRepository.update(id_cliente, { nome, endereco, telefone, dataNascimento, CPF, email, cidade })

      return res.status(201).json(updateCliente) */

      const exist = await cidadeRepository.find({where: {nome: cidade.nome}})

      if (exist.length === 0) {
        //console.log("criando novo")
        const newCidade = cidadeRepository.create({UF: cidade.UF, nome: cidade.nome});
        
        await cidadeRepository.save(newCidade);

        cidade = newCidade.idCidade
        //console.log('cidade if', cidade)
        
        const newFuncionario = funcionarioRepository.update(id_funcionario, {
          nome, endereco, telefone,
          dataNascimento, CPF, email, cidade
        })
  
        //await clienteRepository.save(newCliente)
        //console.log("exist if", exist)
        //console.log("teste if", teste)
        return res.status(201).json(newFuncionario)

      }else{
        const getCity = await cidadeRepository.find({where: {nome: cidade.nome}})

        const teste = getCity.map( el => el.idCidade)
        cidade = teste[0]
        //console.log("cidade else", cidade)
        const newCliente = funcionarioRepository.update(id_funcionario, {
          nome, endereco, telefone,
          dataNascimento, CPF, email, cidade
        })
  
        //await clienteRepository.save(newCliente)
        /* console.log("exist else", exist)
        console.log("teste else", teste) */
        return res.status(201).json(newCliente)
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }

  }

  //Excluir funcionario
  async delete(req: Request, res: Response) {

    let id_funcionario = req.params["id_funcionario"]

    try {
      const deleteFuncionario = funcionarioRepository.delete(id_funcionario)

      return res.status(201).json(deleteFuncionario)
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }

  }

  //Listar funcionario
  async list(req: Request, res: Response) {

    try {
      const funcionarios = await funcionarioRepository.find({ order: { nome: { direction: 'ASC' } }, relations: ['cidade'] })
      return res.json(funcionarios)
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

}