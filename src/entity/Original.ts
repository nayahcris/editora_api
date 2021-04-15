import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Escritor } from "./Escritor";



@Entity()
export class Original {
    
    @PrimaryGeneratedColumn()
    private _idOriginal: number;

    @Column()
    private _generoOriginal: string;
    
    @ManyToOne(type => Escritor, escritor => escritor.getOriginais)
    private _escritor: Escritor;

    public get getIdOriginal(){
        return this._idOriginal;
    }

    public get getGeneroOriginal(){
        return this._generoOriginal;
    }

    public set setGeneroOriginal(generoOriginal: string){
        this._generoOriginal = generoOriginal;
    }

    public get getEscritor(){
        return this._escritor;
    }

    public set setEscritor(escritor: Escritor){
        this._escritor = escritor;
    }
}