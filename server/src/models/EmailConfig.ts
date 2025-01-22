import mongoose, { Document } from 'mongoose';
enum FontSize {
  xs = '12px',
  sm = '14px',
  base = '16px',
  lg = '18px',
  xl = '20px',
  '2xl' = '24px',
  '3xl' = '30px',
  '4xl' = '36px',
  '5xl' = '48px'
}

enum FontWeight {
  thin = '100',
  extralight = '200',
  light = '300',
  normal = '400',
  medium = '500',
  semibold = '600',
  bold = '700',
  extrabold = '800',
  black = '900'
}

enum TextTransform {
  uppercase = 'uppercase',
  lowercase = 'lowercase',
  capitalize = 'capitalize',
  'normal-case' = 'normal-case'
}

enum TextAlign {
  left = 'left',
  center = 'center',
  right = 'right',
  justify = 'justify'
}

interface IStyles {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  color?: string;
  textAlign?: TextAlign;
  textTransform?: TextTransform;
}

interface IStyledComponent {
  value: string;
  styles?: IStyles;
}

interface IImageStyles {
  width?: number;
  height?: number;
}

interface IEmailConfig extends Document {
  logo: {
    value: string;
    styles?: IImageStyles;
  };
  title: IStyledComponent;
  content: IStyledComponent;
}

const styleSchema = {
  fontSize: {
    type: String,
    enum: Object.values(FontSize),
    required: false
  },
  fontWeight: {
    type: String,
    enum: Object.values(FontWeight),
    required: false
  },
  color: {
    type: String,
    required: false
  },
  textAlign: {
    type: String,
    enum: Object.values(TextAlign),
    required: false
  },
  textTransform: {
    type: String,
    enum: Object.values(TextTransform),
    required: false
  }
};

const styledComponentSchema = {
  value: { type: String, required: true },
  styles:  styleSchema,
};

// Email config Schema --> Main Schema
const emailConfigSchema = new mongoose.Schema<IEmailConfig>(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    logo: {
      value: { type: String, required: true },
      styles: {
        width: {
          type: Number,
          min: 80,
          max: 160,
          required: false
        },
        height: {
          type: Number,
          min: 80,
          max: 160,
          required: false
        }
      }
    },
    title: styledComponentSchema,
    content: styledComponentSchema
  }, 
  { timestamps: true, _id: true }
);

emailConfigSchema.index({ value: 1 }, { unique: true, sparse: true });

export const EmailConfig = mongoose.model<IEmailConfig>('EmailConfig', emailConfigSchema);
