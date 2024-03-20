import AppDataSource from "../database";
import User from "../entities/User";
import { DefaultService } from "./DefaultService";
import dotenv from "dotenv";
dotenv.config()
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export class UsersService extends DefaultService{
    repo = AppDataSource.getRepository(User)
    
    async login(body: any) {
        const users = await this.repo.find({
            where: {
                email: body.email
            }
        })
        const comparePassword = await bcrypt.compare(body.password, users[0].password)
        let token = null
        if(comparePassword) {
             token = jwt.sign(JSON.parse(JSON.stringify(users[0])), process.env.JWT_SECRET, { 
                expiresIn: '1d'
            });
        }

        return token;
    }
}