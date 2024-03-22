import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm"

@Entity("service_orders")
export default class ServiceOrder{

    @PrimaryGeneratedColumn()
    id : string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column("date")
    start_date: Date;

    @Column("date")
    end_date: Date;

}