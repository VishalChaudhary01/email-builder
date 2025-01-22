import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { EmailConfig } from '../models/EmailConfig';

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

export const saveEmailConfig = async (req: Request, res: Response) => {
     try {
          // TODO -> need to add zod validation
          const config = new EmailConfig(req.body);
          await config.save();
          res.status(201).json({ success: true, message: 'Email config saved successfully' });
     } catch (error) {
          console.log('❌ Error during save email configs: ', error);
          res.status(500).json({ success: false, error: 'Failed to save email configs.'});
     }
}
