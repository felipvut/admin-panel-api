import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm"
import ServiceOrder from "./ServiceOrder";

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

    @OneToMany(() => ServiceOrder, (service_orders) => service_orders.worker)
    service_orders: ServiceOrder[]
}