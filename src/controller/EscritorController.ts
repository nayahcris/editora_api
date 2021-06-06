import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Escritor } from '../entity/Escritor';

//LISTA TODOS OS ESCRITORES
export const getEscritores = async (request: Request, response: Response) => {
    const escritores = await getRepository(Escritor).find()
    return response.json(escritores)
};

//LISTA ESCRITOR
export const getEscritor = async (request: Request, response: Response) => {
    const { _idEscritor } = request.params
    const escritor = await getRepository(Escritor).find({where: [{ _idEscritor: _idEscritor }]})
    return response.status(200).json(escritor)
};

//SALVA ESCRITOR
export const saveEscritor = async(request: Request, response: Response) => {
    const escritor = await getRepository(Escritor).save(request.body)
    return response.json(escritor);
};

//ATUALIZA UM ESCRITOR
export const updateEscritor = async(request: Request, response: Response) => {
    const designerRepository = getRepository(Escritor);
    const { _idEscritor } = request.params
    const escritor = await designerRepository.findOne({where: [{ _idEscritor: _idEscritor }]})
    const escritoratt = designerRepository.merge(escritor, request.body)

    return response.status(200).json(escritoratt)
};

//DELETA UM ESCRITOR
export const removeEscritor = async (request: Request, response: Response) => {
    const { _idEscritor } = request.params
    const escritor = await getRepository(Escritor).delete(_idEscritor)

    if (escritor.affected === 1){
        const escritorRemovido = await getRepository(Escritor).findOne(_idEscritor, {where: [{ _idEscritor: _idEscritor }]})
        return response.status(200)
    }

    return response.status(404)
};


