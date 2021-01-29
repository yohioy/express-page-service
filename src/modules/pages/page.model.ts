import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity('pages')
export class PageModel {

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
    relatedPages: object;

    @Column()
    pagePosition: string;

    @Column()
    plugins: object;

    @Column()
    pageStatus: string;

    @Column()
    createdDate: number;

    @Column()
    modifiedDate: number;

    @Column()
    expiryDate: number;

}
