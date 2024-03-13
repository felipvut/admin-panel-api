
export class DefaultService {
    repo: any;

    async list() {
        return await this.repo.find()
    }
}