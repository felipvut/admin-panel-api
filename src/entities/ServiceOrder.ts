import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm"

@Entity("service_orders")
export default class ServiceOrder{

    @PrimaryGeneratedColumn()
    id : string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    start_date: Date;

    @CreateDateColumn()
    end_date: Date;

}