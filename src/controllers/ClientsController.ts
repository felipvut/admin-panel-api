import { ClientsService } from "../services/ClientsService"
import { DefaultController } from "./DefaultController"
import { Request, Response } from "express"; 

export class ClientsController extends DefaultController{
    service = new ClientsService()
    table = "clients"

    async list(request: Request, response: Response) {
        const entity = await this.service.listClients()
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