import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, OneToOne} from "typeorm";
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

    @ManyToOne(type => Revista, revista => revista.getNumeroRevista, {nullable: true})
    private _numeroRevista: Revista;

    @Column()
    private _registroISBN: string;

    @Column()
    private _autor: string;

    @Column("text")
    private _conteudo: string;

    @Column("text")
    private _sinopse: string;

    @CreateDateColumn()
    private _dataCriacao: Date;

    @UpdateDateColumn()
    private _dataUpdate: Date;

    @ManyToOne(type => Editor, editor => editor.getIdEditor)
    private _editor: Editor;

    @ManyToOne(type => Designer, designer => designer.getIdDesigner)
    private _designer: Designer;

    @ManyToOne(type => Revisor, revisor => revisor.getIdRevisor)
    private _revisor: Revisor;

    @ManyToOne(type => Qrcode, qrcode => qrcode.getIdQrcode)
    private _qrcode: Qrcode;

    @ManyToOne(type => Ra, ra => ra.getIdRa, {nullable: true})
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


    public set setConteudo(conteudo: string){
        this._conteudo = conteudo;
    }

    public get getConteudo(){
        return this._conteudo;
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
    return this._revisor;
   }

   public set setRevisores(revisor: Revisor){
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