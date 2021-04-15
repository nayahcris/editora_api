import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Usuario } from "./Usuario";
import { Livro } from "./Livro";
import { Funcionario } from "./Funcionario";


@Entity()
export class Financeiro extends Funcionario{
    @PrimaryGeneratedColumn()
    private _idFinanceiro: number;

    @ManyToMany(type=> Usuario, usuario => usuario.getIdUsuario)
    @JoinTable()
    private _usuariosPremiun: Array<Usuario>;

    @ManyToMany(type => Livro, livro => livro.getIdLivro)
    @JoinTable()
    private _livrosVendidos: Array<Livro>;

    public get getIdFinanceiro(){
        return this._idFinanceiro;
    }

    public get getUsuariosPremiun(){
        return this._usuariosPremiun.toString();
    }

    public set setUsuariosPremiun(usuarioPremiun: Usuario){
        this._usuariosPremiun.push(usuarioPremiun);
    }

    public get getLivrosVendidos(){
        return this._livrosVendidos.toString();
    }

    public set setLivrosVendidos(livroVendido: Livro){
        this._livrosVendidos.push(livroVendido);
    }
}