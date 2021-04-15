import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Assinatura } from '../entity/Assinatura';

//LISTA TODAS AS Assinaturas 
export const getAssinaturas = async (request: Request, response: Response) => {
    const assinaturas = await getRepository(Assinatura).find()
    return response.json(assinaturas)
};

//LISTA ASSINATURA PELO ID
export const getAssinatura = async (request: Request, response: Response) => {
    const { _idAssinatura } = request.params
    const assinatura = await getRepository(Assinatura).findOne(_idAssinatura)
    return response.json(assinatura)
};

//ADICIONA ASSINATURA
export const saveAssinatura = async(request: Request, response: Response) => {
    const assinatura = await getRepository(Assinatura).save(request.body)
    return response.json(assinatura);
};

//ATUALIZA UMA ASSINATURA
export const updateAssinatura = async(request: Request, response: Response) => {
    const { _idAssinatura } = request.params
    const assinatura = await getRepository(Assinatura).update(_idAssinatura, request.body)

    //VERIFICA SE FOI MODIFICADA UMA LINHA
    if (assinatura.affected === 1){
        const assinaturaAtualizada = await getRepository(Assinatura).findOne(_idAssinatura)
        return response.json(assinaturaAtualizada)
    }

    return response.status(404).json({message: "Assinatura não encontrada!"})
};

//DELETA UMA ASSINATURA
export const removeAssinatura = async (request: Request, response: Response) => {
    const { _idAssinatura } = request.params
    const assinatura = await getRepository(Assinatura).delete(_idAssinatura)

    if (assinatura.affected === 1){
        const pessoaRemovida = await getRepository(Assinatura).findOne(_idAssinatura)
        return response.json({message: "Assinatura Removida"})
    }

    return response.status(404).json({message: "Assinatura não encontrada"})
};