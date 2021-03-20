import { PageModel } from './page.model';
import { ObjectModel } from '../core/ObjectModel';
import { PageStatusTypes, PageTemplateTypes, PageMenuLocationTypes } from '../core/enum';

export interface ICreateGeneralPage {
    pageName: string;
    shortDescription: string;
    longDescription: string;
    parentPage: string;
    strapLine: string;
    seoFriendlyLinkId: string;
    customLink: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    images: object;
    template: PageTemplateTypes;
    pageMenuLocation: PageMenuLocationTypes;
    relatedPages: object;
    plugins: object;
    pageStatus: PageStatusTypes;
    modifiedDate: number;
    createdDate: number;
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

    async getAll (query: { type?: string }): Promise<any> {

        let filter;

        if(query.type) {
            filter = { where: { template: query.type } }
        }

        return super.getAll(filter);
    }

    async delete (id: string): Promise<any> {
        return super.delete(id);
    }

}
