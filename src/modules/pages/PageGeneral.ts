import { PageModel } from './page.model';
import { ObjectModel } from '../core/ObjectModel';
import { PageStatusTypes } from '../core/enum';

export interface ICreateGeneralPage {
    pageName: string;
    shortDescription: string;
    longDescription: string;
    template: string;
    images: object;
    plugins: object;
    modifiedDate: number;
    createdDate: number;
    pageStatus: PageStatusTypes;
}

export class PageGeneral extends ObjectModel {

    protected readonly options: object;

    constructor (options) {
        super(options, PageModel);
    }

    describe() {
        console.log(`General Pages: ${this.options}`)
    }

    async create (data: ICreateGeneralPage): Promise<object> {
        return super.create(data);
    }

    async update (id: string, data: object): Promise<any> {
        return super.update(id, data);
    }

    async getById (id: string): Promise<any> {
        return super.getById(id);
    }

    async getAll (query: object): Promise<any> {
        if(query) {
            query = { where: query }
        }
        return super.getAll(query);
    }

    async delete (id: string): Promise<any> {
        return super.delete(id);
    }

}
