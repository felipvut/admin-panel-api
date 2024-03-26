import AppDataSource from "../database";
import Client from "../entities/Client";
import { DefaultService } from "./DefaultService";

export class ClientsService extends DefaultService{
    repo = AppDataSource.getRepository(Client)

    async listClients() {
        let entities = await this.list()
        for( let x of entities){
            x.due_date_br = this.parseDateDbToBr(x.due_date)
        }
        return entities
    }
}