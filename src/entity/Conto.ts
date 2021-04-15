import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import { Editor } from "./Editor";
import { Qrcode } from "./Qrcode";
import { Ra } from "./Ra";
import { Revisor } from "./Revisor";
import { Designer } from "./Designer";
import { Revista } from "./Revista";


@Entity()
export class Conto {
    @PrimaryGeneratedColumn()
    private _idConto: number;

    @Column()
    private _nomeConto: string;

    @ManyToOne(type => Revista, revista => revista.getContos)
    private _numeroRevista: Revista;

    @Column()
    private _registroISBN: string;

    @Column()
    private _autor: string;

    @ManyToOne(type => Editor, editor => editor.getLivrosTrabalhados)
    private _editor: Editor;

    @ManyToOne(type => Designer, designer => designer.getLivrosTrabalhados)
    private _designer: Designer;

    @ManyToMany(type => Revisor, revisor => revisor.getLivrosTrabalhados)
    @JoinTable()
    private _revisores: Array<Revisor>;

    @ManyToMany(type => Qrcode, qrcode => qrcode.getIdQrcode)
    @JoinTable()
    private _qrcode: Qrcode;

    @ManyToMany(type => Ra, ra => ra.getIdRa)
    @JoinTable()
    private _ra: Ra;


    public get getIdConto(){
        return this._idConto;
    }

    public get getNomeConto(){
        return this._nomeConto;
    }

    public set setNomeConto(nomeConto: string){
        this._nomeConto = nomeConto;
    }

    public get getNumeroRevista(){
        return this._numeroRevista;
    }


    public set setNumeroRevista(numeroRevista: Revista){
        this._numeroRevista = numeroRevista;
    }

    public get getRegistroISBN(){
        return this._registroISBN;
    }

    public set setRegistroISBN(RegistroISBN: string){
        this._registroISBN = RegistroISBN;
    }

    public get getAutor(){
        return this._autor;
    }

    public set setAutor(autor: string){
        this._autor = autor;
    }

    public get getEditor(){
        return this._editor;
    }

    public set setEditor(editor: Editor){
        this._editor = editor;
    }

    public get getDesigner(){
        return this._designer;
    }

    public set setDesigner(designer: Designer){
        this._designer = designer;
    }

    public get getRevisores(){
        return this._revisores.toString();
    }

    public set setRevisores(revisor: Revisor){
        this._revisores.push(revisor);
    }


    public get getQrcode(){
        return this._qrcode;
    }

    public set setQrcode(qrcode: Qrcode){
        this._qrcode = qrcode;
    }
    
    public get getRa(){
        return this._ra;
    }

    public set setRa(ra: Ra){
        this._ra = ra;
    }


}