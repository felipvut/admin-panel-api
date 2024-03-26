import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm"
import Worker from "./Worker";
import Client from "./Client";

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

    @ManyToOne(() => Worker, (workers) => workers.service_orders)
    @JoinColumn({ name: 'workers_id' })
    worker: Worker
    
    @Column()
    workers_id: string;
    
    @ManyToOne(() => Client, (clients) => clients.service_orders)
    @JoinColumn({ name: 'clients_id' })
    client: Client

    @Column()
    clients_id: string;

}