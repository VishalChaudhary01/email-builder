import express from 'express';
import { getEmailLayout, renderAndDownloadTemplate, saveEmailConfig } from '../controllers/index.controller';

const router = express.Router();

router.get('/getEmailLayout', getEmailLayout);
router.post('/saveEmailConfig', saveEmailConfig);
// router.post('/uploadImage');
router.post('/renderAndDownloadTemplate', renderAndDownloadTemplate);

export default router;