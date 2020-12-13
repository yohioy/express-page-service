import { Router } from 'express';
import pageController from '../controllers/PageController';

import pageCreateValidation from '../validation/pageCreateValidation';

const router = Router();

router.get('/', pageController.getAll);
router.post('/', pageCreateValidation, pageController.create);

router.get('/info', (req, res) => {
    res.send('Hello from Page Service');
});

export default router;