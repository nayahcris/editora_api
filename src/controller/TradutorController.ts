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

//SALVA TRADUTOR
export const saveTradutor = async(request: Request, response: Response) => {
    const tradutor = await getRepository(Tradutor).save(request.body)
    return response.json(tradutor);
};

//ATUALIZA UM TRADUTOR
export const updateTradutor = async(request: Request, response: Response) => {
    const designerRepository = getRepository(Tradutor);
    const { _idTradutor } = request.params
    const tradutor = await designerRepository.findOne({where: [{ _idTradutor: _idTradutor }]})
    const tradutoratt = designerRepository.merge(tradutor, request.body)

    return response.status(200).json(tradutor)
};

//DELETA UM TRADUTOR
export const removeTradutor = async (request: Request, response: Response) => {
    const { _idTradutor } = request.params
    const tradutor = await getRepository(Tradutor).delete(_idTradutor)

    if (tradutor.affected === 1){
        const tradutorRemovido = await getRepository(Tradutor).findOne(_idTradutor, {where: [{ _idTradutor: _idTradutor }]})
        return response.status(200)
    }

    return response.status(404)
};