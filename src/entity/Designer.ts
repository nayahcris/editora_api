import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Livro } from "./Livro";
import { Conto } from "./Conto";
import { Funcionario } from "./Funcionario";
import { Editor } from "./Editor";
import { type } from "os";


@Entity()
export class Designer extends Funcionario{
    @PrimaryGeneratedColumn()
    private _idDesigner: number;

    @OneToMany(type => Livro, livro => livro.setDesigner)
    private _livrosTrabalhados: Array<Livro>;

    @OneToMany(type => Conto, conto => conto.getDesigner)
    private _contosTrabalhados: Array<Conto>;

    public get getIdDesigner(){
        return this._idDesigner;
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