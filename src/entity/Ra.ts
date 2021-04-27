import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne} from "typeorm";
import { Conto } from "./Conto";
import { Designer } from "./Designer";


@Entity()
export class Ra {
    @PrimaryGeneratedColumn()
    private _idRa: number;

    @Column()
    private _nome: string;

    //SETAR O TIPO PARA USAR A PÁGINA CERTA
    @Column({nullable: true})
    private _tipo: string;

    //MANDAR A URL DO MARCADOR
    @Column({nullable: true})
    private _urlMarcador: string;

    @Column({nullable: true})
    private _urlDaRA: string;

    @ManyToOne(type => Designer, designer => designer.getIdDesigner, {nullable: true})
    private _designerResponsavel: Designer;

    @Column({default: false})
    private _foiPublicado: boolean;

    @OneToOne(type => Conto, conto => conto.getIdConto, {nullable: true})
    private _conto: Conto;

    public get getIdRa(){
        return this._idRa;
    }

    public get getNome(){
        return this._nome;
    }

    public set setNome(nome: string){
        this._nome = nome;
    }

    public get getTipo(){
        return this._tipo;
    }

    public set setTipo(tipo: string){
        this._tipo = tipo;

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
