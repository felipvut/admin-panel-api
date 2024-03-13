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

    @CreateDateColumn()
    due_date: Date;

    @CreateDateColumn()
    contract_end: Date;

}