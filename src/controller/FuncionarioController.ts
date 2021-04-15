import {getRepository, createQueryBuilder, Connection, getConnection, createConnection} from 'typeorm'
import {Request, Response} from 'express'
import { Funcionario } from '../entity/Funcionario'
import { Pessoa } from '../entity/Pessoa';
import { Descendente } from '../entity/Descendente';


//LISTA TODOS OS FUNCIONÁRIOS
export const getFuncionarios = async (request: Request, response: Response) => {
    const funcionarios = await getRepository(Funcionario).find({relations: ["_descendentes"]})
    return response.json(funcionarios)
};

//LISTA FUNCIONÁRIO PELO ID
export const getFuncionario = async (request: Request, response: Response) => {
    const { _idFuncionario } = request.params
    const funcionario = await 
                            getRepository(Funcionario)
                            .createQueryBuilder("funcionario")
                            .leftJoinAndSelect("funcionario._descendentes", "_descendentes")
                            .where("funcionario._idFuncionario = :_idFuncionario", { _idFuncionario: _idFuncionario })
                            .getOne();
   
                            return response.json(funcionario)
};

//ADICIONA FUNCIONÁRIO COM 1 DESCENDENTE
//SALVA PESSOA E DESCENDENTE NA TABELA PESSOA E DESCENDENTE
export const saveFuncionario = async(request: Request, response: Response) => {
    const funcionario = new Funcionario ()
    const descendente = new Descendente()
    const {_idPessoa, _nome, _nomeSocial, _genero, _email, _telefone, _whatsapp, _nickname, _cpf , _salario, _pis, _nomeMae, _rg, _carteiraDeTrabalho} = request.body
    const {descendentes}= request.body
    funcionario._idPessoa = _idPessoa
    funcionario.setNome = _nome
    funcionario.setNomeSocial = _nomeSocial
    funcionario.setGenero = _genero
    funcionario.setEmail = _email
    funcionario.setTelefone = _telefone
    funcionario.setWhatsapp = _whatsapp
    funcionario.setNickname = _nickname
    
    //SALVA FUNCIONARIO COMO PESSOA
    const conexaoPessoa = await getRepository(Pessoa).save(funcionario)

    //PEGA DADOS DE DESCENDENTE
    descendente._idPessoa = descendentes._idPessoa
    descendente._idDescendente = descendentes._idDescendente
    descendente.setNome = descendentes._nome
    descendente.setNomeSocial = descendentes._nomeSocial
    descendente.setGenero = descendentes._genero
    descendente.setEmail = descendentes._email
    descendente.setTelefone = descendentes._telefone
    descendente.setWhatsapp = descendentes._whatsapp
    descendente.setNickname = descendentes._nickname

    //SALVA DESCENDENTE COMO PESSOA
    const SalvaPessoaDescendente = await getRepository(Pessoa).save(descendente)

    /*console.log(descendente)*/
    console.log(descendentes)
    //SALVA DESCENDENTE
    const conexaoDescendente = await getRepository(Descendente).save(descendentes)
    console.log(conexaoDescendente)
    //PEGA DADOS DE FUNCIONARIO 
    funcionario._descendentes = descendentes
    funcionario.setSalario = _salario
    funcionario.setPis = _pis
    funcionario.setRg = _rg
    funcionario.setNomeMae = _nomeMae
    funcionario.setCarteiraDeTrabalho = _carteiraDeTrabalho
    funcionario.setCpf = _cpf
    //SALVA FUNCIONARIO
    const Conexaofuncionario = await getRepository(Funcionario).save(funcionario)
    return response.json(Conexaofuncionario)
};


//ATUALIZA UM FUNCIONÁRIO
export const updateFuncionario = async(request: Request, response: Response) => {
    const { _idFuncionario } = request.params
    const {descendentes}= request.body
    const descendente = new Descendente()
    const funcionarioD = new Funcionario()
    console.log(descendentes)
    /*const funcionario = await 
                            getRepository(Funcionario)
                            .createQueryBuilder("funcionario")
                            .leftJoinAndSelect("funcionario._descendentes", "_descendentes")
                            .where("funcionario._idFuncionario = :_idFuncionario", { _idFuncionario: _idFuncionario })
                            .getOne();
    console.log(funcionario)*/

    const funcionarioAtualizado = await getRepository(Funcionario).update(_idFuncionario, request.body)

    //VERIFICA SE FOI MODIFICADA UMA LINHA
    /*if (funcionario.affected === 1){
        const funcionarioAtualizada = await getRepository(Funcionario).findOne(_idFuncionario)
        return response.json(funcionarioAtualizada)
    }/*

    return response.status(404).json({message: "Pessoa não encontrada!"})*/
};

//DELETA UM FUNCIONÁRIO
export const removeFuncionario = async (request: Request, response: Response) => {
    const { _idFuncionario } = request.params
    const {_idPessoa} = request.body
  
    const funcionarioRemovido = await   getConnection()
                                        .createQueryBuilder()
                                        .relation(Funcionario, "_descendentes")
                                        .of(_idFuncionario)
                                        .remove(_idPessoa)
                                        

    return response.json(funcionarioRemovido)
    

    /*const funcionario = await getRepository(Funcionario).delete(_idFuncionario)

    if (funcionario.affected === 1){
        const funcionarioRemovida = await getRepository(Funcionario).findOne(_idFuncionario)
        return response.json({message: "Funcionário Removido"})
    }

    return response.status(404).json({message: "Funcionário não encontrado"})*/
};