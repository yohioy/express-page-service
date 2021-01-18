interface IObjectModel {
    db: object;
    data: object;
    query: object;
    id: string;
    model: any;
    describe(): void;
    create(data): void;
    update(id, data): void;
    getById(id): void;
    getAll(query): void;
    delete(query): void;
}

export abstract class ObjectModel implements IObjectModel {

    db: any;
    data: object;
    query: object;
    id: string;
    model: any;

    protected constructor(protected readonly options, Model: object){
        this.db = options.db;
        this.model = Model;
    };

    abstract describe(this: ObjectModel): void;

    async create(data) {
        return this.db.insertOne(this.model, data)
    };

    async update(id, replace): Promise<any> {
        return this.db.update(this.model, id, replace);
    };

    async getById(id) {
        return this.db.findOne(this.model, id);
    };

    async getAll(query) {
        return this.db.find(this.model, query);
    };

    async delete(id) {
        return this.db.delete(this.model, id);
    }

}