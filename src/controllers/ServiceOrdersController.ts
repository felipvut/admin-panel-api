import { ServiceOrdersService } from "../services/ServiceOrdersService"
import { DefaultController } from "./DefaultController"
import { Request, Response } from "express"; 

export class ServiceOrdersController extends DefaultController{
    service = new ServiceOrdersService()
    table = "service_orders"

    async list(request: Request, response: Response) {
        const entity = await this.service.listServiceOrder()
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