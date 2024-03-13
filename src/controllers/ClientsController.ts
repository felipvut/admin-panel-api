import { ClientsService } from "../services/ClientsService"
import { DefaultController } from "./DefaultController"

export class ClientsController extends DefaultController{
    service = new ClientsService()
    table = "clients"
}