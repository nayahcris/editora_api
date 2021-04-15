import {Entity, PrimaryGeneratedColumn} from "typeorm";
import { Funcionario } from "./Funcionario";



@Entity()
export class Ceo extends Funcionario {
    @PrimaryGeneratedColumn()
    private _idCeo: number;

}