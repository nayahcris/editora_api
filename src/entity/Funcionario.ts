import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, JoinColumn, ManyToOne} from "typeorm";
import { Descendente } from "./Descendente";
import { Pessoa } from "./Pessoa";



@Entity()
export abstract class Funcionario extends Pessoa{ 
 
   @PrimaryGeneratedColumn()
   private _idFuncionario: number;

   @Column()
   private _salario: number;

   @Column()
   private _pis: number;

   @Column()
   private _cpf: string;

   @Column()
   private _rg: string;

   @Column()
   private _carteiraDeTrabalho: number;

   @Column()
   private _nomeMae: string;

   @Column({nullable: true})
   private _nomePai: string;

//@ManyToOne(() => Descendente, _descendentes => Descendente, {cascade: ["insert"]})
  // @JoinTable()
   //_descendentes: Descendente[];

   public get getIdFuncionario() {
      return this._idFuncionario
   }

   public get getSalario(){
      return this._salario;
   }

   public set setSalario(salario: number){
      this._salario = salario;
   }

   public get getPis() {
      return this._pis
   }

   public set setPis(pis:number){
      this._pis = pis;
   }

   public get getCpf() {
      return this._cpf
   }

   public set setCpf(cpf:string){
      this._cpf = cpf;
   }

   public get getRg() {
      return this._rg;
   }

   public set setRg(rg:string){
      this._rg = rg;
   }

   public get getCarteiraDeTrabalho(){
      return this._carteiraDeTrabalho;
   }

   public set setCarteiraDeTrabalho (carteiraDeTrabalho:number){
      this._carteiraDeTrabalho = carteiraDeTrabalho;
   }

   public get getNomeMae(){
      return this._nomeMae;
   }

   public set setNomeMae(nomeMae: string){
      this._nomeMae = nomeMae;
   }
   
   public get getNomePai(){
      return this._nomePai;
   }

   public set setNomePai(nomePai:string){
       this._nomePai = nomePai;
    }

    /*public get getDependentes(){
       return this._descendentes.toString();
    }
    public set setDescendentes(descendentes: Descendente){
       this._descendentes = [ ]
    }*/
}