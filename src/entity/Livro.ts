import {Entity, PrimaryGeneratedColumn, Column, FileLogger, ManyToOne, OneToMany, ManyToMany, JoinTable} from "typeorm";
import { Editor } from "./Editor";
import { Qrcode } from "./Qrcode";
import { Ra } from "./Ra";
import { Revisor } from "./Revisor";
import { Designer } from "./Designer";
import { Tradutor } from "./Tradutor";
import { Escritor } from "./Escritor";


@Entity()
export class Livro {
    @PrimaryGeneratedColumn()
    private _idLivro: number;

    @Column()
    private _nomeLivro: string;

    @Column()
    private _registroISBN: string;

    @ManyToOne(type => Escritor, escritor => escritor.getOriginais)
    private _autor: string;

    @ManyToOne(type => Editor, editor => editor.getLivrosTrabalhados)
    private _editor: Editor;

    @ManyToOne(type => Designer, designer => designer.getLivrosTrabalhados)
    private _designer: Designer;

    @ManyToOne(type => Tradutor, tradutor => tradutor.getLivrosTrabalhados)
    private _tradutor: Tradutor;

    @ManyToMany(type => Revisor, revisor => revisor.getLivrosTrabalhados)
    @JoinTable()
    private _revisores: Array<Revisor>;

    @ManyToMany(type => Qrcode, qrcode => qrcode.getIdQrcode)
    @JoinTable()
    private _qrcode: Qrcode;

    @ManyToMany(type => Ra, ra => ra.getIdRa)
    @JoinTable()
    private _ra: Ra;


    public get getIdLivro(){
        return this._idLivro;
    }

    public get getNomeLivro(){
        return this._nomeLivro;
    }

    public set setNomeLivro(nomeLivro: string){
        this._nomeLivro = nomeLivro;
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

    public get getTradutor(){
        return this._tradutor;
    }

    public set setTradutor(tradutor: Tradutor){
        this._tradutor = tradutor;
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