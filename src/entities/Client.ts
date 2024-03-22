import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm"

@Entity("clients")
export default class Client{

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

}