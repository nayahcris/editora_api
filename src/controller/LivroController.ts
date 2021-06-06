import {getRepository} from 'typeorm'
import {Request, Response} from 'express'
import { Livro } from '../entity/Livro';

//LISTA TODOS OS LIVROS
export const getLivros = async (request: Request, response: Response) => {
    const livros = await getRepository(Livro).find({relations: ["_escritor", "_tradutor", "_editor", 
    "_designer", "_revisor", "_qrcode", "_ra"]})
    return response.json(livros)
};

//LISTA LIVRO PELO ID
export const getLivro = async (request: Request, response: Response) => {
    const { _idLivro } = request.params
    const livro = await getRepository(Livro).findOne(_idLivro, {relations: ["_escritor", "_tradutor", "_editor", 
    "_designer", "_revisor", "_qrcode", "_ra"]})
    return response.json(livro)
};

//SALVA LIVRO
export const saveLivro = async(request: Request, response: Response) => {
    const livro = await getRepository(Livro).save(request.body)
    return response.json(livro);
};

//DELETA UM LIVRO
export const removeLivro = async (request: Request, response: Response) => {
    const { _idLivro } = request.params
    const livro = await getRepository(Livro).delete(_idLivro)

    if (livro.affected === 1){
        const livroRemovido = await getRepository(Livro).findOne(_idLivro, {relations: ["_escritor", "_tradutor", "_editor", 
        "_designer", "_revisor", "_qrcode", "_ra"]})
        return response.status(200)
    }

    return response.status(404)
};

//ATUALIZA UM LIVRO
export const updateLivro = async(request: Request, response: Response) => {
    const livroRepository = getRepository(Livro);
    const { _idLivro } = request.params
    const livro = await livroRepository.findOne(_idLivro, {relations: ["_escritor", "_tradutor", "_editor", 
    "_designer", "_revisor", "_qrcode", "_ra"]})
    const livroatt = livroRepository.merge(livro, request.body)

    return response.json(livroatt)
};
