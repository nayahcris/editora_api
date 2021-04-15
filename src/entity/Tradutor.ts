import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Conto } from "./Conto";
import { Livro } from "./Livro";
import { Funcionario } from "./Funcionario";


@Entity()
export class Tradutor extends Funcionario{
    @PrimaryGeneratedColumn()
    private _idTradutor: number;

    @OneToMany(type => Livro, livro => livro.getTradutor)
    private _livrosTrabalhados: Array<Livro>;



    public get getIdTradutor(){
        return this._idTradutor;
    }

    public get getLivrosTrabalhados(){
        return this._livrosTrabalhados.toString();
    }

    public set setLivroTrabalhado(livroTrabalhado: Livro){
        this._livrosTrabalhados.push(livroTrabalhado);
    }
}