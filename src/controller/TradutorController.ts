import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Tradutor } from '../entity/Tradutor';

//LISTA TODOS OS TRADUTORES
export const getTradutores = async (request: Request, response: Response) => {
    const tradutores = await getRepository(Tradutor).find()
    return response.json(tradutores)
};


//LISTA TRADUTOR POR ID
export const getTradutor = async (request: Request, response: Response) => {
    const { _idTradutor } = request.params
    const tradutor = await getRepository(Tradutor).find({where: [{ _idTradutor: _idTradutor }]})
    return response.json(tradutor)
};