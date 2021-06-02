import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Ra } from '../entity/Ra';

//LISTA TODOS AS RA
export const getRas = async (request: Request, response: Response) => {
    const realidadesAumentadas = await getRepository(Ra).find()
    return response.json(realidadesAumentadas)
};

//LISTA RA PELO ID
export const getRa = async (request: Request, response: Response) => {
    const { _idRa } = request.params
    const ra = await getRepository(Ra).findOne(_idRa, {relations: ["_designerResponsavel"]})
    return response.json(ra)
};