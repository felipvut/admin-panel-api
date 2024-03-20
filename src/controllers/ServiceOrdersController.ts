import { ServiceOrdersService } from "../services/ServiceOrdersService"
import { DefaultController } from "./DefaultController"

export class ServiceOrdersController extends DefaultController{
    service = new ServiceOrdersService()
    table = "service_orders"
}