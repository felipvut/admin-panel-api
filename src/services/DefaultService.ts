
export class DefaultService {
    repo: any;

    async get(id: any) {
        try{
            return await this.repo.find({
                where: {
                    id: id
                }
            })
        } catch(e) {
            console.log(e)
        }
    }

    async list() {
        try{
            return await this.repo.find()
        } catch(e) {
            console.log(e)
        }
    }

    async create(obj: any) {
        try{
            const createdValue = await this.repo.insert(obj)
            return createdValue
        } catch(e) {
            console.log(e)
        }
    }
}