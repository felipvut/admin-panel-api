import { WorkersService } from "../services/WorkersService"
import { DefaultController } from "./DefaultController"
import { Request, Response } from "express"; 

export class WorkersController extends DefaultController{
    service = new WorkersService()
    table = "workers"

    async list(request: Request, response: Response) {
        const entity = await this.service.listWorkers()
        if(entity) {
            return response.status(200).send({
                table: this.table,
                data: entity,
                success: true
            })
        } else {
            return response.status(500).send({
                table: this.table,
                success: false
            })
        }
    }
}