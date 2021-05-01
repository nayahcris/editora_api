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