import { ConsultantModel } from './consultant.model';
import { ObjectModel } from '../core/ObjectModel';
import { PageStatusTypes } from '../core/enum';

export interface ICreateConsultant {
    pageName: string;
    shortDescription: string;
    longDescription: string;
    template: string;
    images: object;
    plugins: object;
    modifiedDate: number;
    createdDate: number;
    profileLetter: string,
    qualifications: string,
    hospitals: string,
    clinicalInterests: string,
    contactEmail: string,
    contactTelephone: string,
    websiteAddress: string,
    clinicTimes: string,
    specialities: object,
    services: object,
    pageStatus: PageStatusTypes;
}

export class Consultant extends ObjectModel {

    protected readonly options: object;

    constructor (options) {
        super(options, ConsultantModel);
    }

    describe() {
        console.log(`Consultant profiles: ${this.options}`)
    }

    async create (data: ICreateConsultant): Promise<object> {
        return super.create(data);
    }

    async update (id: string, data: object): Promise<any> {
        return super.update(id, data);
    }

    async getById (id: string): Promise<any> {
        return super.getById(id);
    }

}
