import { Router } from 'express'
import { FuncionarioController } from './controllers/FuncionarioController'
import { CidadeController } from './controllers/CidadeController'

const routes = Router()

//Através daqui, pode fazer o teste das rotas, eu uso o postman

//CRUD cidades
routes.post('/cidade/create', new CidadeController().create)
routes.put('/cidade/update/:id_cidade', new CidadeController().update)
routes.delete('/cidade/delete/:id_cidade', new CidadeController().delete)
routes.get('/cidade/list', new CidadeController().list)

//CRUD funcionarios
routes.post('/funcionario/create', new FuncionarioController().create)
routes.put('/funcionario/update/:id_funcionario', new FuncionarioController().update)
routes.delete('/funcionario/delete/:id_funcionario', new FuncionarioController().delete)
routes.get('/funcionario/list', new FuncionarioController().list)

export default routes
