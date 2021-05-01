import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable, OneToOne, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { Editor } from "./Editor";
import { Qrcode } from "./Qrcode";
import { Ra } from "./Ra";
import { Revisor } from "./Revisor";
import { Designer } from "./Designer";
import { Tradutor } from "./Tradutor";
import { Escritor } from "./Escritor";
import { type } from "os";


@Entity()
export class Livro {
    @PrimaryGeneratedColumn()
    private _idLivro: number;

    @Column()
    private _nomeLivro: string;

    @Column()
    private _registroISBN: string;

    @Column("text", {nullable: true})
    private _conteudo: string;

    @Column("text", {nullable: true})
    private _sinopse: string;

    @CreateDateColumn()
    private _dataCriacao: Date;

    @UpdateDateColumn()
    private _dataUpdate: Date;

    @ManyToOne(type => Escritor, escritor => escritor.getIdEscritor)
    private _escritor: string;

    @ManyToOne(type => Editor, editor => editor.getIdEditor)
    private _editor: Editor;

    @ManyToOne(type => Designer, designer => designer.getIdDesigner)
    private _designer: Designer;

    @ManyToOne(type => Revisor, revisor => revisor.getIdRevisor)
    private _revisor: Revisor;

    @ManyToOne(type => Tradutor, tradutor => tradutor.getIdTradutor)
    private _tradutor;

    @ManyToOne(type => Qrcode, qrcode => qrcode.getIdQrcode)
    private _qrcode: Qrcode;

    @ManyToOne(type => Ra, ra => ra.getIdRa, {nullable: true})
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

    public get getEscritor(){
        return this._escritor;
    }

    public set setEscritor(escritor: string){
        this._escritor = escritor;
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

    public get getRevisor(){
        return this._revisor;
    }

    public set setRevisor(revisor: Revisor){
        this._revisor = revisor;
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