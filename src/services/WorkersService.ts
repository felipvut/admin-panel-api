import AppDataSource from "../database";
import Worker from "../entities/Worker";
import { DefaultService } from "./DefaultService";

export class WorkersService extends DefaultService{
    repo = AppDataSource.getRepository(Worker)

    async listWorkers() {
        let entities = await this.list()
        for( let x of entities){
            x.due_date_br = this.parseDateDbToBr(x.due_date)
            x.contract_end_br = this.parseDateDbToBr(x.contract_end)
        }
        return entities
    }
}