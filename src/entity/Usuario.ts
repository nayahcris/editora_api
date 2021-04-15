import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, JoinTable, OneToOne} from "typeorm";
import { Pessoa } from "./Pessoa";
import { Assinatura } from "./Assinatura";
import { Conto } from "./Conto";
import { Livro } from "./Livro";

@Entity()
export class Usuario extends Pessoa{ 

    @PrimaryGeneratedColumn()
    private _idUsuario: number;

    @OneToOne(type => Assinatura, assinatura => assinatura.getIdAssinatura)
    private _tipoAssinatura: Assinatura;

    @ManyToMany(type => Conto, conto => conto.getIdConto)
    @JoinTable()
    private _contosLidos: Array <Conto>;

    @ManyToMany(type => Conto, conto => conto.getIdConto)
    @JoinTable()
    private _contosFavoritos: Array<Conto>;

    @ManyToMany(type => Conto, conto => conto.getIdConto)
    @JoinTable()
    private _contosComentados: Array<Conto>;

    @ManyToMany(type => Livro, livro => livro.getIdLivro)
    @JoinTable()
    private _livrosLidos: Array <Livro>;

    @ManyToMany(type => Livro, livro => livro.getIdLivro)
    @JoinTable()
    private _livrosFavoritos: Array<Livro>;

    @ManyToMany(type => Livro, livro => livro.getIdLivro)
    @JoinTable()
    private _livrosComentados: Array<Livro>;

    @ManyToMany(type => Livro, livro => livro.getIdLivro)
    @JoinTable()
    private _livrosComprados: Array<Livro>;


    public get getIdUsuario(){
        return this._idUsuario
    }

    public get getTipoAssinatura(){
        return this._tipoAssinatura;
    }

    public set setTipoAssinatura(tipoAssinatura: Assinatura){
        this._tipoAssinatura = tipoAssinatura;
    }

    public get getContosLidos(){
        return this._contosLidos.toString()
    }

    public set setContosLidos(contoLido: Conto){
        this._contosLidos.push(contoLido);
    }

    public get getContosFavoritos(){
        return this._contosFavoritos.toString()
    }

    public set setContosFavoritos(contoFavorito: Conto){
        this._contosFavoritos.push(contoFavorito);
    }
    

    public get getContosComentados(){
        return this._contosComentados.toString()
    }

    public set setContosComentados(contoComentado: Conto){
        this._contosComentados.push(contoComentado);
    }

    public get getLivrosLidos(){
        return this._livrosLidos.toString()
    }

     public set setLivrosLidos(livroLido: Livro){
        this._livrosLidos.push(livroLido);
    }

    public get getLivrosFavoritos(){
        return this._livrosFavoritos.toString()
    }

    public set setLivrosFavoritos(livroFavorito: Livro){
        this._livrosFavoritos.push(livroFavorito);
    }

    public get getLivrosComentados(){
        return this._livrosComentados.toString()
    }

    public set setLivrosComentados(livroComentado: Livro){
        this._livrosComentados.push(livroComentado);
    }

    public get getLivrosComprados(){
        return this._livrosComprados.toString()
    }

    public set setLivrosComprados(livroComprado: Livro){
        this._livrosComprados.push(livroComprado);
    }
    
    
}