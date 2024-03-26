
export class DefaultService {
    repo: any;

    parseDateDbToBr(data: Date){
        let dia  = data.getDate().toString()
        let diaF = (dia.length == 1) ? '0'+dia : dia
        let mes  = (data.getMonth()+1).toString()
        let mesF = (mes.length == 1) ? '0'+mes : mes
        let anoF = data.getFullYear();
        return diaF+"/"+mesF+"/"+anoF;
    }

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