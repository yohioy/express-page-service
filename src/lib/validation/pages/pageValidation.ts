import Joi from 'joi';
import { IOptions } from './IOptions';

export const pageValidation = async (data: object, options: IOptions) => {

    const pageStatusTypes = options.pageStatusTypes;
    const templateTypes = options.templateTypes;

    const schema = Joi.object({
        pageName: Joi.string().required(),
        longDescription: Joi.string(),
        shortDescription: Joi.string(),
        parentPage: Joi.string(),
        strapLine: Joi.string(),
        seoFriendlyLinkId: Joi.string(),
        customLink: Joi.string(),
        metaTitle: Joi.string(),
        metaDescription: Joi.string(),
        metaKeywords: Joi.string(),
        images: Joi.array(),
        template: Joi.string().valid(...templateTypes).required(),
        menuLocation: Joi.string(),
        relatedPages: Joi.object(),
        plugins: Joi.object(),
        pageStatus: Joi.string().valid(...pageStatusTypes).required(),
    }).required();

    try {
        return await schema.validateAsync(data);
    }
    catch (e) {
        throw e;
    }
}