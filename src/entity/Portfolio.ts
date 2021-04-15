import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Artista } from "./Artista";



@Entity()
export class Portfolio {

    @PrimaryGeneratedColumn()
    private _idPortfolio: number;
    
    @Column()
    private _generoPortfolio: string;

    @ManyToOne(type => Artista, artista => artista.getPortfolios)
    private _artista: Artista;

    public get getIdPortfolio(){
        return this._idPortfolio;
    }

    public get getGeneroPortfolio(){
        return this._generoPortfolio;
    }

    public set setGeneroPortfolio(generoPortfolio: string){
        this._generoPortfolio = generoPortfolio;
    }

    public get getArtista(){
        return this._artista;
    }

    public set setArtista(artista: Artista){
        this._artista = artista;
    }
}