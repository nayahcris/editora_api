import { Pessoa } from "./Pessoa";
import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Descendente extends Pessoa{
    @PrimaryGeneratedColumn()
    _idDescendente
}