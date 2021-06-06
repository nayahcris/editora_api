import {Router, Request, Response} from 'express'
import {getTasks, saveTask, getTask, updateTask, finishTask, removeTask} from '../src/controller/TasksController'
import { getAssinatura, saveAssinatura, updateAssinatura, removeAssinatura, getAssinaturas} from './controller/AssinaturaController'
import { getConto, getContos, removeConto, saveConto, updateConto } from './controller/ContoController'
import { getDesigner, getDesigners, removeDesigner, saveDesigner, updateDesigner } from './controller/DesignerController'
import { getEditor, getEditores, removeEditor, saveEditor, updateEditor } from './controller/EditorController'
import { getRevisores, getRevisor, updateRevisor, saveRevisor, removeRevisor } from './controller/RevisorController'
//import { getFuncionario, getFuncionarios, saveFuncionario, updateFuncionario, removeFuncionario } from './controller/FuncionarioController'
import { getLivro, getLivros, removeLivro, saveLivro, updateLivro } from './controller/LivroController'
import { getPessoas, getPessoa, savePessoa, updatePessoa, removePessoa} from './controller/PessoaController'
import { getRa, getRas } from './controller/RaController'
import { getRevistas, getRevista, updateRevista, saveRevista, removeRevista } from './controller/RevistaController'
import { getTradutor, getTradutores, removeTradutor, saveTradutor, updateTradutor } from './controller/TradutorController'
import { getEscritor, getEscritores, removeEscritor, saveEscritor, updateEscritor } from './controller/EscritorController'

const routes = Router()


//ROTAS DE TAREFAS QUE PRECISO RETIRAR DEPOIS
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
/*routes.get('/funcionarios', getFuncionarios)
routes.get('/funcionarios/:_idFuncionario', getFuncionario)
routes.post('/funcionarios', saveFuncionario)
routes.put('/funcionarios/:_idFuncionario', updateFuncionario)
routes.delete('/funcionarios/:_idFuncionario', removeFuncionario)*/


//ROTAS DE DESCENDENTE
//routes.get('/descendentes', getFuncionario)


//ROTAS DE CONTO
routes.get('/contos', getContos)
routes.get('/contos/:_idConto', getConto)
routes.put('/contos/:_idContos', updateConto)
routes.post('/contos', saveConto)
routes.delete('/contos/:_idConto', removeConto)



//ROTAS DE REVISTA
routes.get('/revistas', getRevistas)
routes.get('/revistas/:_idRevista', getRevista)
routes.put('/revistas/:_idRevista', updateRevista)
routes.post('/revistas', saveRevista)
routes.delete('/revistas/:_idRevista', removeRevista)


//ROTAS DE RA
routes.get('/ras', getRas)
routes.get('/ras/:_idRa', getRa)

//ROTAS DE LIVRO
routes.get('/livros', getLivros)
routes.get('/livros/:_idLivro', getLivro)
routes.put('/livros/:_idLivro', updateLivro)
routes.post('/livros', saveLivro)
routes.delete('/livros/:_idLivro', removeLivro)

//ROTAS DE DESIGNER
routes.get('/designers', getDesigners)
routes.get('/designers/:_idDesigner', getDesigner)
routes.post('/designers', saveDesigner)
routes.put('/designers/:_idDesigner', updateDesigner)
routes.delete('/designers/:_idDeseigner', removeDesigner)

//ROTAS DE EDITOR
routes.get('/editores', getEditores)
routes.get('/editores/:_idEditor', getEditor)
routes.post('/editores', saveEditor)
routes.put('/editores/:_idEditor', updateEditor)
routes.delete('/editores/:_idEditor', removeEditor)

//ROTAS DE REVISOR
routes.get('/revisores', getRevisores)
routes.get('/revisores/:_idRevisor', getRevisor)
routes.put('/revisores/:_idRevisor', updateRevisor)
routes.post('/revisores', saveRevisor)
routes.delete('/revisores/:_idRevisor', removeRevisor)


//ROTAS DE TRADUTOR
routes.get('/tradutores', getTradutores)
routes.get('/tradutores/:_idTradutor', getTradutor)
routes.put('/tradutores/:_idTradutor', updateTradutor)
routes.post('/tradutores', saveTradutor)
routes.delete('/tradutores/:_idTradutor', removeTradutor)


//ROTAS DE ESCRITOR
routes.get('/escritores', getEscritores)
routes.get('/escritores/:_idEscritor', getEscritor)
routes.put('/escritores/:_idEscritor', updateEscritor)
routes.post('/escritores', saveEscritor)
routes.delete('/escritores/:_idEscritor', removeEscritor)

export default routes
