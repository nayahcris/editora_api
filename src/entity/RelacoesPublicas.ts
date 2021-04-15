import {Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import { Usuario } from "./Usuario";
import { Funcionario } from "./Funcionario";


@Entity()
export class RelacoesPublicas extends Funcionario{

    @PrimaryGeneratedColumn()
    private _idRelacoesPublicas: number;

    @ManyToMany(type=> Usuario, usuario => usuario.getIdUsuario)
    @JoinTable()
    private _usuarios: Array <Usuario>;

    public get getIdRelacoespublicas(){
        return this._idRelacoesPublicas;
    }

    public get getUsuarios(){
        return this._usuarios.toString();
    }

    public set setUsuarios(usuario: Usuario){
        this._usuarios.push(usuario);
    }
}