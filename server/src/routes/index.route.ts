import express from 'express';
import { getEmailLayout, saveEmailConfig } from '../controllers/index.controller';

const router = express.Router();

router.get('/getEmailLayout', getEmailLayout);
router.post('/saveEmailConfig', saveEmailConfig);
// router.post('/uploadImage');
// router.post('/renderAndDownloadTemplate', )

export default router;