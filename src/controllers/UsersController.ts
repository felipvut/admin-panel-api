import { UsersService } from "../services/UsersService"
import { DefaultController } from "./DefaultController"
import { Request, Response } from "express"; 

export class UsersController extends DefaultController{
    service = new UsersService()
    table = "users"

    async login(request: Request, response: Response) {
        const body = request.body
        const entity = await this.service.login(body)
        if(entity) {
            return response.status(200).send({
                table: this.table,
                token: entity,
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