import {Entity, PrimaryGeneratedColumn, Column, FileLogger, ManyToMany, JoinColumn, ManyToOne} from "typeorm";
import { Designer } from "./Designer";


@Entity()
export class Qrcode {
    @PrimaryGeneratedColumn()
    private _idQrcode: number;

    @Column()
    private _nome: string;

    @Column()
    private _descricao: string;

    @Column()
    private _nomeDoArquivo: string;

    @ManyToOne(type => Designer, designer => designer.getIdDesigner)
    private _designerResponsavel: Designer;

    @Column()
    private _foiPublicado: boolean;

    public get getIdQrcode(){
        return this._idQrcode;
    }

    public get getNome(){
        return this._nome;
    }

    public set setNome(nome: string){
        this._nome = nome;
    }

    public get getDescricao(){
        return this._descricao;
    }

    public set setDescricao(descricao: string){
        this._descricao = descricao;
    }

    public get getNomeDoArquivo(){
        return this._nomeDoArquivo;
    }

    public set setNomeDoArquivo(nomeDoArquivo: string){
        this._nomeDoArquivo = nomeDoArquivo;
    }

    public get getDesignerResponsavel(){
        return this._designerResponsavel;
    }

    public set setDesignerResponsavel(designerResponsavel: Designer){
        this._designerResponsavel = designerResponsavel;
    }

    public get getFoiPublicado(){
        return this._foiPublicado;
    }

    public set setFoiPublicado(foiPublicado: boolean){
        this._foiPublicado = foiPublicado;
    }
}
