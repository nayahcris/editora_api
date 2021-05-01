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