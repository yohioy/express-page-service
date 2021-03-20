import { Response } from 'express';
import { PageGeneral, ICreateGeneralPage } from "../modules/pages";
import logger from '../lib/logger';
import {responseType} from '../lib/responseTypes';

class PageController {

    async create(req, res: Response) {

        const options = { db: req.app.locals.db };
        const payload = req.body;

        const data: ICreateGeneralPage = {
            pageName: payload.pageName,
            shortDescription: payload.shortDescription,
            longDescription: payload.longDescription,
            parentPage: payload.parentPage,
            strapLine: payload.strapLine,
            seoFriendlyLinkId: payload.seoFriendlyLinkId,
            customLink: payload.customLink,
            metaTitle: payload.metaTitle,
            metaDescription: payload.metaDescription,
            metaKeywords: payload.metaKeywords,
            images: JSON.parse(payload.images),
            template: payload.template,
            pageMenuLocation: payload.pageMenuLocation,
            relatedPages: JSON.parse(payload.relatedPages),
            plugins: payload.plugins,
            pageStatus: payload.pageStatus,
            createdDate: Date.now(),
            modifiedDate: Date.now()
        };

        let page = new PageGeneral(options);

        try {
            await page.create(data);
            res.status(responseType.success.code).json(responseType.success)
        } catch (e) {
            logger.error(e);
            res.status(responseType.failed.code).json(responseType.failed);
        }
    }

    async update(req, res: Response) {

        const options = { db: req.app.locals.db };
        const payload = req.body;
        const id = req.params.id;

        if(!id) {
            return res.status(responseType.success.code).json(responseType.success)
        }

        const data = {
            pageName: payload.pageName,
            shortDescription: payload.shortDescription,
            longDescription: payload.longDescription,
            strapLine: payload.strapLine,
            template: payload.template,
            plugins: payload.plugins,
            images: payload.images,
            createdDate: Date.now(),
            modifiedDate: Date.now(),
            pageStatus: payload.pageStatus,
        };

        let page = new PageGeneral(options);

        try {
            await page.update(id, data);
            res.status(responseType.success.code).json(responseType.success)
        } catch (e) {
            logger.error(e);
            res.status(responseType.failed.code).json(responseType.failed);
        }

    }

    async getAll(req, res: Response) {
        const options = { db: req.app.locals.db };
        const page = new PageGeneral(options);
        const query = req.query;

        try {
            const response = await page.getAll(query);
            res.status(responseType.success.code).json({total: response.length, data: response});

        } catch (e) {
            logger.error(e);
            res.status(responseType.failed.code).json(responseType.failed);
        }
    }



    async getById(req, res: Response) {
        const options = { db: req.app.locals.db };
        const id = req.params.id;

        let page = new PageGeneral(options);

        try {
            const response = await page.getById(id);
            res.status(responseType.success.code).json({ data: response })
        } catch (e) {
            logger.error(e);
            res.status(responseType.failed.code).json(responseType.failed);
        }
    }


    async delete(req, res: Response) {
        const options = { db: req.app.locals.db };
        const id = req.params.id;

        let page = new PageGeneral(options);

        try {
            await page.delete(id);
            res.status(responseType.success.code).json(responseType.success)
        } catch (e) {
            console.log(e);
            res.status(responseType.failed.code).json(responseType.failed);
        }

    }

}

export default new PageController();