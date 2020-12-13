import { PageModel } from './page.model';
import { MongoEntityManager } from 'typeorm';

export interface ICreateUser {
    pageName: string;
    shortDescription: string;
    longDescription: number;
    modifiedDate: number;
    createdDate: number;
    status: string;
}

export class Pages {

    protected dbManager: MongoEntityManager;

    constructor (options) {
        this.dbManager = options.dbManager;
    }

    async create (data: ICreateUser): Promise<any> {
        return this.dbManager.insertOne(PageModel, data);
    }

    async findUser (id: string): Promise<any> {
        return this.dbManager.findOne(PageModel, { where: { cognitoId: id } });
    }

    async updateVerifiedUser (id: string, status: string): Promise<any> {
        return this.dbManager.updateOne(PageModel, { cognitoId: id }, { $set: { verificationStatus: status } });
    }

    async getAll (): Promise<any> {
        return this.dbManager.find(PageModel);
    }



}
