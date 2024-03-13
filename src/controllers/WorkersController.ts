import { WorkersService } from "../services/WorkersService"
import { DefaultController } from "./DefaultController"

export class WorkersController extends DefaultController{
    service = new WorkersService()
    table = "workers"
}