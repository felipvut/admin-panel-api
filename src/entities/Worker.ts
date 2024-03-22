import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm"

@Entity("workers")
export default class Worker{

    @PrimaryGeneratedColumn()
    id : string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    cpf: string;

    @Column("date")
    due_date: Date;

    @Column("date")
    contract_end: Date;

}