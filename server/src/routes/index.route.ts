import express from 'express';
import { getEmailLayout, saveEmailTemplate } from '../controllers/index.controller';

const router = express.Router();

router.get('/getEmailLayout', getEmailLayout);
router.post('/uploadEmailConfig', saveEmailTemplate);
// router.post('/uploadImage');
// router.post('/renderAndDownloadTemplate', )

export default router;