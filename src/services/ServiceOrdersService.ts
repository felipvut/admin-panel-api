import AppDataSource from "../database";
import ServiceOrder from "../entities/ServiceOrder";
import { DefaultService } from "./DefaultService";

export class ServiceOrdersService extends DefaultService{
    repo = AppDataSource.getRepository(ServiceOrder)

    async listServiceOrder() {
        let entities = await this.repo
        .createQueryBuilder("service_orders")
        .leftJoinAndSelect('service_orders.worker', 'workers')
        .leftJoinAndSelect('service_orders.client', 'clients')
        .getMany()
        for( let x of entities){
            x.start_date_br = this.parseDateDbToBr(x.start_date)
        }
        return entities
    }

}