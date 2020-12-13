import { Response } from 'express';
import { responseType } from '@masteryo/masteryo-utils';
import { Pages } from "../modules/pages";

class PageController {

    async create(req, res: Response) {

        const options = { dbManager: req.dbManager };

        const payload = req.body;

        const data = {
            pageName: payload.pageName,
            shortDescription: payload.shortDescription,
            longDescription: payload.longDescription,
            createdDate: Date.now(),
            modifiedDate: Date.now(),
            status: payload.status,
        };

        let page = new Pages(options);

        try {
            await page.create(data);
            res.status(200).send(responseType.success)
        } catch (e) {
            console.log(e);
            res.status(401).send(responseType.failed);
        }
    }

    async getAll(req, res: Response) {
        const options = { dbManager: req.dbManager };

        let page = new Pages(options);

        let usersList;
        try {
            usersList = await page.getAll();
        } catch (e) {
            console.log(e);
            return res.status(401).send(responseType.failed);
        }

        if(!usersList) {
            console.log('No users list');
            return res.status(401).send(responseType.failed);
        }

        res.status(200).send({ data: usersList })

    }
}

export default new PageController();