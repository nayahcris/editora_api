import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable} from "typeorm";
import { Livro } from "./Livro";
import { Conto } from "./Conto";
import { Funcionario } from "./Funcionario";


@Entity()
export class Revisor extends Funcionario{
    @PrimaryGeneratedColumn()
    private _idRevisor: number;

    @OneToMany(type => Livro, livro => livro.getRevisores)
    @JoinTable()
    private _livrosTrabalhados: Array<Livro>;

    @OneToMany(type => Conto, conto => conto.getRevisores)
    private _contosTrabalhados: Array<Conto>;

    public get getIdRevisor(){
        return this._idRevisor;
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