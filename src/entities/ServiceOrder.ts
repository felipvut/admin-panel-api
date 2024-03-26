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

    @CreateDateColumn()
    start_date: Date;

    @CreateDateColumn()
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

    start_date_br: string;
}