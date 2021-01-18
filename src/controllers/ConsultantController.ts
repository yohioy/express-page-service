import { Response } from 'express';
import { Consultant } from "../modules/consultants";
import logger from '../lib/logger';
import {responseType} from '../lib/responseTypes';
import Joi from "joi";
import {PageGeneral} from "../modules/pages";

class ConsultantController {

    async create(req, res: Response) {

        const options = { db: req.app.locals.db };
        const payload = req.body;

        const data = {
            pageName: payload.pageName,
            shortDescription: payload.shortDescription,
            longDescription: payload.longDescription,
            strapLine: payload.strapLine,
            seoFriendlyLinkId: payload.seoFriendlyLinkId,
            customLink: payload.customLink,
            metaTitle: payload.metaTitle,
            metaDescription: payload.metaDescription,
            metaKeywords: payload.metaKeywords,
            template: payload.template,
            plugins: payload.plugins,
            images: payload.images,
            profileLetter: payload.profileLetter,
            qualifications: payload.qualifications,
            hospitals: payload.hospitals,
            clinicalInterests: payload.clinicalInterests,
            contactEmail: payload.contactEmail,
            contactTelephone: payload.contactTelephone,
            websiteAddress: payload.websiteAddress,
            clinicTimes: payload.clinicTimes,
            specialities: payload.specialities,
            services: payload.services,
            createdDate: Date.now(),
            modifiedDate: Date.now(),
            pageStatus: payload.pageStatus,
        };

        let consultant = new Consultant(options);

        try {
            await consultant.create(data);
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
            seoFriendlyLinkId: payload.seoFriendlyLinkId,
            customLink: payload.customLink,
            metaTitle: payload.metaTitle,
            metaDescription: payload.metaDescription,
            metaKeywords: payload.metaKeywords,
            template: payload.template,
            plugins: payload.plugins,
            images: payload.images,
            profileLetter: payload.profileLetter,
            qualifications: payload.qualifications,
            hospitals: payload.hospitals,
            clinicalInterests: payload.clinicalInterests,
            contactEmail: payload.contactEmail,
            contactTelephone: payload.contactTelephone,
            websiteAddress: payload.websiteAddress,
            clinicTimes: payload.clinicTimes,
            specialities: payload.specialities,
            services: payload.services,
            createdDate: Date.now(),
            modifiedDate: Date.now(),
            pageStatus: payload.pageStatus,
        };

        let consultant = new Consultant(options);

        try {
            await consultant.update(id, data);
            res.status(responseType.success.code).json(responseType.success)
        } catch (e) {
            logger.error(e);
            res.status(responseType.failed.code).json(responseType.failed);
        }
    }



    async getById(req, res: Response) {
        const options = { db: req.app.locals.db };
        const id = req.params.id;

        let consultant = new Consultant(options);

        try {
            const response = await consultant.getById(id);
            res.status(responseType.success.code).json({ data: response })
        } catch (e) {
            logger.error(e);
            res.status(responseType.failed.code).json(responseType.failed);
        }
    }

}

export default new ConsultantController();