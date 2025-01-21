import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { EmailTemplate } from '../models/EmailTemplate';
import multer from 'multer';

export const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null, 'uploads/');
     },
     filename: (req, file, cb) => {
          cb(null, Date.now() + path.extname(file.originalname));
     }
});

export const getEmailLayout = async (req: Request, res: Response) => {
     try {
          const layoutPath = path.join(__dirname, '..' ,'templates', 'layout.html');
          const layout = await fs.promises.readFile(layoutPath, 'utf8');
          res.json({ success: true, layout });
     } catch (error) {
          console.log('❌ Error during fetch email layout: ', error);
          res.status(500).json({ success: false, error: 'Failed to fetch email layout.'});
     }
}

export const saveEmailTemplate = async (req: Request, res: Response) => {
     try {
          const template = new EmailTemplate(req.body);
          await template.save();
          res.status(201).json({ success: true, message: 'Template saved successfully' });
     } catch (error) {
          console.log('❌ Error during fetch email layout: ', error);
          res.status(500).json({ success: false, error: 'Failed to fetch email layout.'});
     }
}
