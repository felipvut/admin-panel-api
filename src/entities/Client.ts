import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm"
import ServiceOrder from "./ServiceOrder";

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

    @OneToMany(() => ServiceOrder, (service_orders) => service_orders.client)
    service_orders: ServiceOrder[]

}