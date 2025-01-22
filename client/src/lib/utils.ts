import { IEmailConfig, IFontSize, IFontWeight, ITextAlign, ITextTransform } from "@/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getElementStyles = (element: IEmailConfig): React.CSSProperties => {
  const styles = element.styles || {};
  return {
    color: styles.color,
    fontSize: styles.fontSize as IFontSize,
    fontWeight: styles.fontWeight as IFontWeight,
    textAlign: styles.textAlign as ITextAlign,
    textTransform: styles.textTransform as ITextTransform,
    width: styles.width,
    height: styles.height,
    background: "transparent",
    border: "none",
    outline: "none",
  };
}

export const formatStyleProperty = (key: string, value: string | number): string => {
  // Convert camelCase to kebab-case
  const formatKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
  // Add units to numeric values where needed
  switch (formatKey) {
    case 'font-size':
      return `font-size: ${value}`;
    case 'width':
    case 'height':
      return `${formatKey}: ${value}px`;
    case 'text-align':
    case 'font-weight':
    case 'text-transform':
    case 'color':
      return `${formatKey}: ${value}`;
    default:
      return `${formatKey}: ${value}`;
  }
};

export const transformConfig = (emailConfig: IEmailConfig[]) => {
  return {
    logo: {
      value: emailConfig.find(el => el.name === "logo")?.value || "",
      styles: emailConfig.find(el => el.name === "logo")?.styles
    },
    title: {
      value: emailConfig.find(el => el.name === "title")?.value || "",
      styles: emailConfig.find(el => el.name === "title")?.styles
    },
    content: {
      value: emailConfig.find(el => el.name === "content")?.value || "",
      styles: emailConfig.find(el => el.name === "content")?.styles
    }
  }
};
