import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Livro } from "./Livro";
import { Conto } from "./Conto";
import { Funcionario } from "./Funcionario";


@Entity()
export class Editor extends Funcionario{
    @PrimaryGeneratedColumn()
    private _idEditor: number;

    @OneToMany(type => Livro, livro => livro.getEditor)
    private _livrosTrabalhados: Array<Livro>;

    //@OneToMany(type => Conto, conto => conto.getEditor)
    private _contosTrabalhados: Array<Conto>;

    public get getIdEditor(){
        return this._idEditor;
    }

    public get getLivrosTrabalhados(){
        return this._livrosTrabalhados.toString();
    }

    public set setLivroTrabalhado(livroTrabalhado: Livro){
        this._livrosTrabalhados.push(livroTrabalhado);
    }

    public get getContosTrabalhados(){
        return this._contosTrabalhados;
    }

    public set setContoTrabalhado(contoTrabalhado: Conto){
        this._contosTrabalhados.push(contoTrabalhado);
    }
}