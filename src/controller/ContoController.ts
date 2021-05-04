import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Conto } from '../entity/Conto';

//LISTA TODOS OS CONTOS 
export const getContos = async (request: Request, response: Response) => {
    const contos = await getRepository(Conto).find({relations: ["_numeroRevista", "_editor", 
    "_designer", "_revisor", "_qrcode", "_ra"]})
    return response.json(contos)
};

//LISTA CONTO PELO ID
export const getConto = async (request: Request, response: Response) => {
    const { _idConto } = request.params
    const conto = await getRepository(Conto).findOne(_idConto, {relations: ["_numeroRevista", "_editor", 
    "_designer", "_revisor", "_qrcode", "_ra"]})
    return response.json(conto)
};

export const updateConto = async(request: Request, response: Response) => {
    const { _idConto } = request.params
    const conto = await getRepository(Conto).update(_idConto, request.body)

    if (conto.affected === 1){
        const contoUpdated = await getRepository(Conto).findOne(_idConto)
        return response.json(contoUpdated)
    }

    return response.status(404).json({message: "Conto não encontrado"})
};