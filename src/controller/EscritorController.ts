import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Escritor } from '../entity/Escritor';

//LISTA TODOS OS EDITORES
export const getEscritores = async (request: Request, response: Response) => {
    const escritores = await getRepository(Escritor).find()
    return response.json(escritores)
};