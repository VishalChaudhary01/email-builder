import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { EmailConfig, IImageStyles, IStyles } from '../models/EmailConfig';
import { formatStyleProperty } from '../config/formatSyleProperty';

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

type IStyleProperties = IStyles & IImageStyles;
export interface IEmailConfig {
     id: string;
     name: string;
     value: string;
     type: "text" | "textArea" | "image";
     styles?: IStyleProperties;
}
export const renderAndDownloadTemplate = async (req: Request, res: Response) => {
     try {
          // TODO --> Need to add zod validation 
          const emailConfig: IEmailConfig[] = req.body;
          const layoutPath = path.join(__dirname, '..' ,'templates', 'layout.html');
          let layout = await fs.promises.readFile(layoutPath, 'utf8');
   
          emailConfig.forEach((config) => {
          // Replace content
          layout = layout.replace(
          new RegExp(`{{${config.name}}}`, "g"),
          config.value || ""
          );
     
          // Replace styles
          if (config.styles) {
          const styleString = Object.entries(config.styles)
               .filter(([_key, value]) => value !== undefined && value !== "")
               .map(([key, value]) => formatStyleProperty(key, value))
               .join("; ");
     
          layout = layout.replace(
               new RegExp(`{{${config.name}_styles}}`, "g"),
               styleString
          );
          } else {
               // Remove style placeholder if no styles exist
               layout = layout.replace(
                    new RegExp(`{{${config.name}_styles}}`, "g"),
                    ""
               );
          }
          });
          // Clean up any remaining unmatched placeholders
          layout = layout.replace(/{{[^}]+_styles}}/g, "");
       
          res.setHeader('Content-Type', 'text/html');
          res.setHeader('Content-Disposition', 'attachment; filename=email-template.html');
          res.send(layout);
     } catch (error) {
       res.status(500).json({ error: 'Error generating template' });
     }
};