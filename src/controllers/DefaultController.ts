import { Request, Response } from "express"; 
export class DefaultController {
    service = null;
    table = null

    async get(request: Request, response: Response, id: any) {
        const entity = await this.service.get(id)
        if(entity) {
            return response.status(200).send({
                table: this.table,
                data: entity[0],
                success: true
            })
        } else {
            return response.status(500).send({
                table: this.table,
                success: false
            })
        }
    }

    async list(request: Request, response: Response) {
        const entity = await this.service.list()
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

    async create(request: Request, response: Response) {
        const obj = request.body
        const entity = await this.service.create(obj)
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