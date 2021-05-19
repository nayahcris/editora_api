import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinTable, OneToOne} from "typeorm";
import { Editor } from "./Editor";
import { Conto } from "./Conto";


@Entity()
export class Revista {
    @PrimaryGeneratedColumn()
    private _idRevista: number;

    @Column()
    private _numeroRevista: number;

    @Column()
    private _generoRevista: string;

    @OneToOne(type => Editor, editor => editor.getContosTrabalhados)
    private _responsavel: Editor;


    public get getIdRevista(){
        return this._idRevista;
    }

    public get getNumeroRevista(){
        return this._numeroRevista;
    }

    public set setnumeroRevista(numeroRevista: number){
        this._numeroRevista = numeroRevista;
    }

    public get getGeneroRevista(){
        return this._generoRevista;
    }

    public set setGeneroRevista(generoRevista: string){
        this._generoRevista = generoRevista;
    }

    public get getResponsavel(){
        return this._responsavel;
    }

    public set setResponsavel(responsavel: Editor){
        this._responsavel = responsavel;
    }

    /*public get getContos(){
        return this._contos.toString();
    }

    public set setContos(conto: Conto){
        this._contos.push(conto);
    }*/


}