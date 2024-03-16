
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

    async update(obj: any, id: any) {
        try{
            return await this.repo.update({id: id},obj)
        } catch(e) {
            console.log(e)
        }
    }

    async delete(id: any) {
        try{
            return await this.repo.delete({id: id})
        } catch(e) {
            console.log(e)
        }
    }
}