import { Request, Response } from "express";
import { cidadeRepository } from '../repositories/cidadeRepository'

export class CidadeController {
  //Criar cidade
  async create(req: Request, res: Response) {
    let { UF, nome } = req.body

    if (!nome) {
      return res.status(400).json({ message: 'O nome é obrigatório' })
    }

    try {
      const newCidade = cidadeRepository.create({ UF, nome })

      await cidadeRepository.save(newCidade)

      return res.status(201).json(newCidade)
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }

  }

  //Editar cidade
  async update(req: Request, res: Response) {
    let { UF, nome } = req.body
    let id_cidade = req.params["id_cidade"]

    try {
      const updateCidade = cidadeRepository.update(id_cidade, { UF, nome })

      return res.status(201).json(updateCidade)
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }

  }

  //Excluir cidade
  async delete(req: Request, res: Response) {
    let id_cidade = req.params["id_cidade"]

    try {
      const deleteCidade = cidadeRepository.delete(id_cidade)

      return res.status(201).json(deleteCidade)
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }

  }

  //Listar cidade
  async list(req: Request, res: Response) {
    try {
      const cidades = await cidadeRepository.find()
      return res.json(cidades)
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

}