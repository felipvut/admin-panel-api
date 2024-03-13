import { DataSource } from "typeorm";
import Livro from "../entities/Client";
import Worker from "../entities/Worker";
import dotenv from "dotenv";
dotenv.config()

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [Livro, Worker],
    synchronize: false,
    logging: true,
})

export default AppDataSource
