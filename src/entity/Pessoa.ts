import {Entity, PrimaryGeneratedColumn, Column, DataTypeNotSupportedError, IsNull, TableInheritance, PrimaryColumn} from "typeorm";



@Entity()
export abstract class Pessoa {

    @PrimaryGeneratedColumn()
    _idPessoa: number;

    @Column() 
    private _nome: string;

    @Column({nullable: true})
    private _nomeSocial: string;

    @Column()
    private _genero: string;

    @Column({nullable: true})
    private _dataDeNascimento: Date;

    @Column()
    private _email: string;

    @Column({nullable: true})
    private _telefone: number;

    @Column({nullable: true})
    private _whatsapp: number;

    @Column() 
    private _nickname: string;

    public get getIdPessoa() {
        return this._idPessoa;
        
    }
   
    public get getNome() {
        return this._nome;
        
    }

    public set setNome(nome:string) {
        this._nome = nome;
        
    }
    
    public get getNomeSocial() {
        return this._nomeSocial;
        
    }

    public set setNomeSocial(nomeSocial:string) {
        this._nomeSocial = nomeSocial;
        
    }

    public get getGenero() {
        return this._genero;
        
    }

    public set setGenero(genero: string) {
        this._genero = genero;
        
    }

    public get getEmail() {
        return this._email;
        
    }

    public set setEmail(email: string) {
        this._email = email;
        
    }

    public get getTelefone() {
        return this._telefone;
        
    }

    public set setTelefone(telefone: number) {
        this._telefone = telefone;
        
    }

    public get getWhatsapp() {
        return this._whatsapp;
        
    }

    public set setWhatsapp(whatsapp: number) {
        this._whatsapp = whatsapp;
        
    }

    public get getNickname() {
        return this._nickname;
        
    }

    public set setNickname(nickname: string) {
        this._nickname = nickname;
        
    }


    public get getDataDeNascimento() {
        return this._dataDeNascimento;
        
    }

    public set setDataDeNascimento(dataDeNascimento:Date) {
        this._dataDeNascimento = dataDeNascimento;
        
    }

}