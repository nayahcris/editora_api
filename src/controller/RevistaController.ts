import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Revista } from '../entity/Revista';

//LISTA TODOS AS REVISTAS
export const getRevistas = async (request: Request, response: Response) => {
    const revistas = await getRepository(Revista).find()
    return response.json(revistas)
};