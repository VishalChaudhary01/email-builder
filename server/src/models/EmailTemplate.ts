import mongoose, { Schema, Document } from 'mongoose';

export interface IEmailTemplate extends Document {
  logoImage: string;
  title: string;
  content: string;
  layout: string;
  createdAt: Date;
  updatedAt: Date;
}

const emailTemplateSchema: Schema = new Schema<IEmailTemplate>(
  {
    logoImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    layout: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const EmailTemplate = mongoose.model<IEmailTemplate>('EmailTemplate', emailTemplateSchema);