import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Editor } from '../entity/Editor';

//LISTA TODOS OS EDITORES
export const getEditores = async (request: Request, response: Response) => {
    const editores = await getRepository(Editor).find()
    return response.json(editores)
};


//LISTA EDITOR POR ID
export const getEditor = async (request: Request, response: Response) => {
    const { _idEditor } = request.params
    const editor = await getRepository(Editor).find({where: [{ _idEditor: _idEditor }]})
    return response.json(editor)
};

//SALVA EDITOR
export const saveEditor = async(request: Request, response: Response) => {
    const editor = await getRepository(Editor).save(request.body)
    return response.json(editor);
};

//ATUALIZA UM EDITOR
export const updateEditor = async(request: Request, response: Response) => {
    const designerRepository = getRepository(Editor);
    const { _idEditor } = request.params
    const editor = await designerRepository.findOne({where: [{ _idEditor: _idEditor }]})
    const contoatt = designerRepository.merge(editor, request.body)

    return response.status(200).json(contoatt)
};