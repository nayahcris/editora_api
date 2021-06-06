import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Designer } from '../entity/Designer';


//LISTA TODOS OS DESIGNERS
export const getDesigners = async (request: Request, response: Response) => {
    const designers = await getRepository(Designer).find()
    return response.json(designers)
};


//LISTA DESIGNER POR ID
export const getDesigner = async (request: Request, response: Response) => {
    const { _idDesigner } = request.params
    const designer = await getRepository(Designer).find({where: [{ _idDesigner: _idDesigner }]})
    return response.json(designer)
};

//ATUALIZA UM DESIGNER
export const updateDesigner = async(request: Request, response: Response) => {
    const designerRepository = getRepository(Designer);
    const { _idDesigner } = request.params
    const designer = await designerRepository.findOne({where: [{ _idDesigner: _idDesigner }]})
    const contoatt = designerRepository.merge(designer, request.body)

    return response.json(contoatt)
};

//SALVA  DESIGNER
export const saveDesigner = async(request: Request, response: Response) => {
    const designer = await getRepository(Designer).save(request.body)
    return response.json(designer);
};

//DELETA UM DESIGNER
export const removeDesigner = async (request: Request, response: Response) => {
    const { _idDesigner } = request.params
    const designer = await getRepository(Designer).delete(_idDesigner)

    if (designer.affected === 1){
        const designerRemovido = await getRepository(Designer).findOne(_idDesigner, {where: [{ _idDesigner: _idDesigner }]})
        return response.status(200)
    }

    return response.status(404)
};