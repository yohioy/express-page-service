import Joi from 'joi';
import { responseType } from '@masteryo/masteryo-utils';

const schema = Joi.object({
    pageName: Joi.string().required(),
    longDescriptions: Joi.string().required(),
    shortDescription: Joi.string().required(),
    status: Joi.string().required()
}).required();

export default async (req, res, next) => {

    const payload = req.body;

    try {
        req.body = await schema.validateAsync(payload);
        next();
    }
    catch (e) {
        console.log(e);
        res.status(404).send(responseType.failed);
    }

}
