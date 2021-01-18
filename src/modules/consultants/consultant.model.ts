import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity('pages')
export class ConsultantModel {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    parentPage: string;

    @Column()
    pageName: string;

    @Column()
    shortDescription: string;

    @Column()
    longDescription: string;

    @Column()
    strapLine: string;

    @Column()
    seoFriendlyLinkId: string;

    @Column()
    customLink: string;

    @Column()
    metaTitle: string;

    @Column()
    metaDescription: string;

    @Column()
    metaKeywords: string;

    @Column()
    images: object;

    @Column()
    template: string;

    @Column()
    menuLocation: string;

    @Column()
    relatedPages: string;

    @Column()
    pagePosition: string;

    @Column()
    plugins: object;

    @Column()
    profileLetter: string;

    @Column()
    qualifications: string;

    @Column()
    hospitals: string;

    @Column()
    clinicalInterests: string;

    @Column()
    contactEmail: string;

    @Column()
    contactTelephone: string;

    @Column()
    websiteAddress: string;

    @Column()
    clinicTimes: string;

    @Column()
    specialities: string;

    @Column()
    services: string;

    @Column()
    pageStatus: string;

    @Column()
    createdDate: number;

    @Column()
    modifiedDate: number;

    @Column()
    expiryDate: number;

}
