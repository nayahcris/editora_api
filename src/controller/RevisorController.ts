import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Revisor } from '../entity/Revisor';

//LISTA TODOS OS REVISORES
export const getRevisores = async (request: Request, response: Response) => {
    const revisores = await getRepository(Revisor).find()
    return response.json(revisores)
};


//LISTA REVISOR POR ID
export const getRevisor = async (request: Request, response: Response) => {
    const { _idRevisor } = request.params
    const revisor = await getRepository(Revisor).find({where: [{ _idRevisor: _idRevisor }]})
    return response.json(revisor)
};


//SALVA REVISOR
export const saveRevisor = async(request: Request, response: Response) => {
    const revisor = await getRepository(Revisor).save(request.body)
    return response.json(revisor);
};

//ATUALIZA UM REVISOR
export const updateRevisor = async(request: Request, response: Response) => {
    const designerRepository = getRepository(Revisor);
    const { _idRevisor } = request.params
    const revisor = await designerRepository.findOne({where: [{ _idRevisor: _idRevisor }]})
    const revisoratt = designerRepository.merge(revisor, request.body)

    return response.status(200).json(revisor)
};

//DELETA UM REVISOR 
export const removeRevisor = async (request: Request, response: Response) => {
    const { _idRevisor } = request.params
    const revisor = await getRepository(Revisor).delete(_idRevisor)

    if (revisor.affected === 1){
        const escritorRemovido = await getRepository(Revisor).findOne(_idRevisor, {where: [{ _idRevisor: _idRevisor }]})
        return response.status(200)
    }

    return response.status(404)
};