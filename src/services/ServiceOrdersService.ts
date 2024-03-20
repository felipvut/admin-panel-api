import AppDataSource from "../database";
import ServiceOrder from "../entities/ServiceOrder";
import { DefaultService } from "./DefaultService";

export class ServiceOrdersService extends DefaultService{
    repo = AppDataSource.getRepository(ServiceOrder)

}