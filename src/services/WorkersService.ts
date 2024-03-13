import AppDataSource from "../database";
import Worker from "../entities/Worker";
import { DefaultService } from "./DefaultService";

export class WorkersService extends DefaultService{
    repo = AppDataSource.getRepository(Worker)

}