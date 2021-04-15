import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Pessoa } from '../entity/Pessoa';

//LISTA TODAS AS PESSOAS
export const getPessoas = async (request: Request, response: Response) => {
    const pessoa = await getRepository(Pessoa).find()
    return response.json(pessoa)
};

//LISTA PESSOA PELO ID
export const getPessoa = async (request: Request, response: Response) => {
    const { _idPessoa } = request.params
    const pessoa = await getRepository(Pessoa).findOne(_idPessoa)
    return response.json(pessoa)
};

//ADICIONA PESSOA
export const savePessoa = async(request: Request, response: Response) => {
    const pessoa = await getRepository(Pessoa).save(request.body)
    return response.json(pessoa);
};
//ATUALIZA UMA PESSOA
export const updatePessoa = async(request: Request, response: Response) => {
    const { _idPessoa } = request.params
    const pessoa = await getRepository(Pessoa).update(_idPessoa, request.body)

    //VERIFICA SE FOI MODIFICADA UMA LINHA
    if (pessoa.affected === 1){
        const pessoaAtualizada = await getRepository(Pessoa).findOne(_idPessoa)
        return response.json(pessoaAtualizada)
    }

    return response.status(404).json({message: "Pessoa não encontrada!"})
};

//DELETA UMA PESSOA
export const removePessoa = async (request: Request, response: Response) => {
    const { _idPessoa } = request.params
    const pessoa = await getRepository(Pessoa).delete(_idPessoa)

    if (pessoa.affected === 1){
        const pessoaRemovida = await getRepository(Pessoa).findOne(_idPessoa)
        return response.json({message: "Pessoa Removida"})
    }

    return response.status(404).json({message: "Pessoa não encontrada"})
};