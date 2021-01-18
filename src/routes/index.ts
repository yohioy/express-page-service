import { Router } from 'express';

/* Controllers */
import pageController from '../controllers/PageController';
import consultantController from '../controllers/ConsultantController';

/* Validators */
import pageValidator from '../validation/PageValidator';
import consultantValidator from '../validation/ConsultantValidator';

const router = Router();

router.get('/pages', pageController.getAll);
router.get('/pages/:id', pageController.getById);
router.post('/pages', pageValidator.create, pageController.create);
router.put('/pages/:id', pageValidator.update, pageController.update);
router.delete('/pages/:id', pageController.delete);

router.get('/consultants/:id', consultantController.getById);
router.post('/consultants', consultantValidator.create, consultantController.create);
router.put('/consultants/:id', consultantValidator.update, consultantController.update);


router.get('/info', (req, res) => {
    res.send('Hello from Page Service');
});

export default router;