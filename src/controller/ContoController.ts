import {getConnection, getRepository, UpdateQueryBuilder} from 'typeorm'
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


//ATUALIZA UM CONTO
export const updateConto = async(request: Request, response: Response) => {
    const contoRepository = getRepository(Conto);
    const { _idConto } = request.params
    const conto = await contoRepository.findOne(_idConto, {relations: ["_numeroRevista", "_editor", 
    "_designer", "_revisor", "_qrcode", "_ra"]})
    const contoatt = contoRepository.merge(conto, request.body)

    return response.json(contoatt)
};


//SALVA CONTO
export const saveConto = async(request: Request, response: Response) => {
    const conto = await getRepository(Conto).save(request.body)
    return response.json(conto);
};

//DELETA UM CONTO
export const removeConto = async (request: Request, response: Response) => {
    const { _idConto } = request.params
    const conto = await getRepository(Conto).delete(_idConto)

    if (conto.affected === 1){
        const contoRemovido = await getRepository(Conto).findOne(_idConto, {relations: ["_numeroRevista", "_editor", 
        "_designer", "_revisor", "_qrcode", "_ra"]})
        return response.json({message: "Conto Removido"})
    }

    return response.status(404).json({message: "Conto não encontrado"})
};