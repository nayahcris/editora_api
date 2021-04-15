import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Pessoa } from "./Pessoa";
import { Portfolio } from "./Portfolio";

@Entity()
export class Artista extends Pessoa{ 
    @PrimaryGeneratedColumn()
    private _idArtista: number;

    @Column()
    private _valorUltimoTrabalho: number;

    @Column()
    private _numeroContratoVigente: number;

    @OneToMany(type => Portfolio, portifolio => portifolio.getArtista)
    private _portfolios: Array<Portfolio>;


    public get getIdArtista(){
        return this._idArtista;
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

    public get getPortfolios(){
        return this._portfolios.toString();
    }

    public set setPortfolios(portfolio: Portfolio){
        this._portfolios.push(portfolio);
    }
}