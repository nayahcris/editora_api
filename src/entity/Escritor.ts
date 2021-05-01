import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany} from "typeorm";
import { Pessoa } from "./Pessoa";
import { Original } from "./Original";
import { Livro } from "./Livro";


@Entity()
export class Escritor extends Pessoa{ 

    @PrimaryGeneratedColumn()
    private _idEscritor: number;

    @Column()
    private _valorUltimoTrabalho: number;

    @Column()
    private _numeroContratoVigente: number;

    @OneToMany(type => Livro, livro => livro.getEscritor)
    private _originais: Array<Original>;

    public get getIdEscritor(){
        return this._idEscritor;
    }

    public get getValorUltimoTrabalho(){
        return this._valorUltimoTrabalho;
    }

    public set setValorUltimoTrabalho(valorUltimoTrabalho: number){
        this._valorUltimoTrabalho = valorUltimoTrabalho;
    }

    public get getNumeroContratoVigente(){
        return this._numeroContratoVigente;
    }

    public set setNumeroContratoVigente(numeroContratoVigente: number){
        this._numeroContratoVigente = numeroContratoVigente;
    }

    public get getOriginais(){
        return this._originais.toString();
    }

    public set setOriginais(original: Original){
        this._originais.push(original);
    }



    
}