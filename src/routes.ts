import {Router, Request, Response} from 'express'
import {getTasks, saveTask, getTask, updateTask, finishTask, removeTask} from '../src/controller/TasksController'
import { getAssinatura, saveAssinatura, updateAssinatura, removeAssinatura, getAssinaturas} from './controller/AssinaturaController'
import { getConto, getContos } from './controller/ContoController'
import { getFuncionario, getFuncionarios, saveFuncionario, updateFuncionario, removeFuncionario } from './controller/FuncionarioController'
import { getPessoas, getPessoa, savePessoa, updatePessoa, removePessoa} from './controller/PessoaController'
import { getRevistas, getRevista } from './controller/RevistaController'

const routes = Router()

routes.get('/tasks', getTasks)
routes.get('/tasks/:id', getTask)
routes.post('/tasks', saveTask)
routes.put('/tasks/:id', updateTask)
//PATCH -> APENAS 1 REGISTRO NO BANCO
routes.patch('/tasks/:id', finishTask)
routes.delete('/tasks/:id', removeTask)

//ROUTAS DE PESSOA
routes.get('/pessoas', getPessoas)
routes.get('/pessoas/:_idPessoa', getPessoa)
routes.post('/pessoas', savePessoa)
routes.put('/pessoas/:_idPessoa', updatePessoa)
routes.delete('/pessoas/:_idPessoa', removePessoa)

//ROUTAS DE ASSINATURA
routes.get('/assinaturas', getAssinaturas)
routes.get('/assinaturas/:_idAssinatura', getAssinatura)
routes.post('/assinaturas', saveAssinatura)
routes.put('/assinaturas/:_idAssinatura', updateAssinatura)
routes.delete('/assinaturas/:_idAssinatura', removeAssinatura)


//ROUTAS DE FUNCIONÁRIO
routes.get('/funcionarios', getFuncionarios)
routes.get('/funcionarios/:_idFuncionario', getFuncionario)
routes.post('/funcionarios', saveFuncionario)
routes.put('/funcionarios/:_idFuncionario', updateFuncionario)
routes.delete('/funcionarios/:_idFuncionario', removeFuncionario)


//ROTAS DE DESCENDENTE
routes.get('/descendentes', getFuncionario)


//ROTAS DE CONTO
routes.get('/contos', getContos)
routes.get('/contos/:_idConto', getConto)



//ROTAS DE REVISTA
routes.get('/revistas', getRevistas)
routes.get('/revistas/:_idRevista', getRevista)


export default routes
