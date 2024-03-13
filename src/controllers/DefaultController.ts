import { Request, Response } from "express"; 
export class DefaultController {
    service = null;
    table = null

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

}