import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Revista } from '../entity/Revista';

//LISTA TODOS AS REVISTAS
export const getRevistas = async (request: Request, response: Response) => {
    const revistas = await getRepository(Revista).find()
    return response.json(revistas)
};


//LISTA REVISTA POR ID
export const getRevista = async (request: Request, response: Response) => {
    const { _idRevista } = request.params
    const revista = await getRepository(Revista).findOne(_idRevista)
    return response.json(revista)
};

//ATUALIZA UMA REVISTA
export const updateRevista = async(request: Request, response: Response) => {
    const revistaRepository = getRepository(Revista);
    const { _idRevista } = request.params
    const revista = await revistaRepository.findOne(_idRevista, {relations: ["_responsavel"]})
    const revistaatt = revistaRepository.merge(revista, request.body)

    return response.json(revistaatt)
};


//SALVA REVISTA
export const saveRevista = async(request: Request, response: Response) => {
    const revista = await getRepository(Revista).save(request.body)
    return response.json(revista);
};

//DELETA REVISTA
export const removeRevista = async (request: Request, response: Response) => {
    const { _idRevista } = request.params
    const revista = await getRepository(Revista).delete(_idRevista)

    if (revista.affected === 1){
        const revistaRemovido = await getRepository(Revista).findOne(_idRevista, {relations: ["_responsavel"]})
        return response.status(200)
    }

    return response.status(404)
};