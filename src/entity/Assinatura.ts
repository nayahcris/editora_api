import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn} from "typeorm";


@Entity()
export class Assinatura {
    @PrimaryGeneratedColumn()
    private _idAssinatura: number;

    @Column()
    private _tipoAssinatura: string;

    @CreateDateColumn()
    private _dataInicioDaAssinatura: Date;

    @UpdateDateColumn({nullable: true})
    private _dataAtualizaçãoDaAssinatura: Date;


    public get getIdAssinatura(){
        return this._idAssinatura;
    }

    public get getTipoAssinatura(){
        return this._tipoAssinatura;
    }

    public set setTipoAssinatura(tipoAssinatura: string){
        this._tipoAssinatura = tipoAssinatura;
    }

    public get getDataInicioDaAssinatura(){
        return this._dataInicioDaAssinatura;
    }

    public set setDataInicioDaAssinatura(dataInicoDaAssinatura: Date){
        this._dataInicioDaAssinatura = dataInicoDaAssinatura;
    }

    public get getDataAtualizacaoDaAssinatura(){
        return this._dataAtualizaçãoDaAssinatura;
    }
    public set setDataAtualizacaoDaAssinatura(dataAtualizacaoDaAssinatura: Date){
        this._dataAtualizaçãoDaAssinatura = dataAtualizacaoDaAssinatura;
    }

}