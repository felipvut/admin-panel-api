import AppDataSource from "../database";
import Client from "../entities/Client";
import { DefaultService } from "./DefaultService";

export class ClientsService extends DefaultService{
    repo = AppDataSource.getRepository(Client)

}