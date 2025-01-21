import { IEmailConfig } from "@/types";

export const initialEmailElements: IEmailConfig[] = [
  {
    id: "1",
    name: "logo",
    value:
      "https://www.logodesign.net/logo/letter-e-inside-light-bulb-with-sunrise-4883ld.png?nwm=1&nws=1&industry=select&sf=&txt_keyword=select",
    type: "image",
  },
  {
    id: "2",
    name: "title",
    value: "Enter title",
    type: "text",
  },
  {
    id: "3",
    name: "content",
    value: "Enter content here",
    type: "textArea",
  },
];

export const fontSizes = [
  {
    name: "xs",
    value: "12px",
  },
  {
    name: "sm",
    value: "14px",
  },
  {
    name: "base",
    value: "16px",
  },
  {
    name: "lg",
    value: "18px",
  },
  {
    name: "xl",
    value: "20px",
  },
  {
    name: "2xl",
    value: "24px",
  },
  {
    name: "3xl",
    value: "30px",
  },
  {
    name: "4xl",
    value: "36px",
  },
  {
    name: "5xl",
    value: "48px",
  },
];

export const fontWeights = [
  {
    name: "thin",
    value: "100",
  },
  {
    name: "extralight",
    value: "200",
  },
  {
    name: "light",
    value: "300",
  },
  {
    name: "normal",
    value: "400",
  },
  {
    name: "medium",
    value: "500",
  },
  {
    name: "semibold",
    value: "600",
  },
  {
    name: "bold",
    value: "700",
  },
  {
    name: "extrabold",
    value: "800",
  },
  {
    name: "black",
    value: "900",
  },
];

export const textTransforms = [
  {
    name: "uppercase",
    value: "uppercase",
  },
  {
    name: "lowercase",
    value: "lowercase",
  },
  {
    name: "capitalize",
    value: "capitalize",
  },
  {
    name: "normal-case",
    value: "normal-case",
  },
];

export const textAligns = [
  {
    name: "left",
    value: "left",
  },
  {
    name: "center",
    value: "center",
  },
  {
    name: "right",
    value: "right",
  },
  {
    name: "justify",
    value: "justify",
  },
];
