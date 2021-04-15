import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
   //VALOR PADRÃO FALSO.
    @Column({
        default: false
    })
    finish: boolean;

    //PASSA A DATA DE CRIAÇÃO AUTOMÁTICA
    @CreateDateColumn()
    created_at: Date;
    //PASSA A DATA DE ATUALIZAÇÃO AUTOMATICANENTE
    @UpdateDateColumn()
    updated_at: Date;
}
