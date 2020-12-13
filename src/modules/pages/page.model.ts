import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity('pages')
export class PageModel {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    pageName: string;

    @Column()
    shortDescription: string;

    @Column()
    longDescription: string;

    @Column()
    status: string;

    @Column()
    createdDate: number;

    @Column()
    modifiedDate: number;

}