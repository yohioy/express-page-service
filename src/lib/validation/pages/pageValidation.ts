import Joi from 'joi';
import { IOptions } from './IOptions';

export const pageValidation = async (data: object, options: IOptions) => {

    const pageStatusTypes = options.pageStatusTypes;
    const templateTypes = options.templateTypes;

    const schema = Joi.object({
        pageName: Joi.string().required(),
        longDescription: Joi.string().allow(''),
        shortDescription: Joi.string().allow(''),
        parentPage: Joi.string().allow(''),
        strapLine: Joi.string().allow(''),
        seoFriendlyLinkId: Joi.string().allow(''),
        customLink: Joi.string().allow(''),
        metaTitle: Joi.string().allow(''),
        metaDescription: Joi.string().allow(''),
        metaKeywords: Joi.string().allow(''),
        images: Joi.string().allow(''),
        template: Joi.string().valid(...templateTypes).required(),
        pageMenuLocation: Joi.string().allow(''),
        pagePosition: Joi.string().allow(''),
        relatedPages: Joi.string().allow('').optional(),
        plugins: Joi.string().allow(''),
        pageStatus: Joi.string().valid(...pageStatusTypes).required(),
    }).required();

    try {
        return await schema.validateAsync(data);
    }
    catch (e) {
        throw e;
    }
};