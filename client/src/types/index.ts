export type IFontSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
export type IFontWeight = "normal" | "medium" | "semibold" | "bold";
export type ITextAlign = "left" | "center" | "right";
export type ITextTransform = "none" | "uppercase" | "lowercase" | "capitalize";

export interface IStyleProperties {
     fontSize?: IFontSize;
     fontWeight?: IFontWeight;
     color?: string;
     textAlign?: ITextAlign;
     textTransform?: ITextTransform;
     width?: number;
     height?: number;
}

export interface IEmailConfig {
     id: string;
     name: string;
     value: string;
     type: "text" | "textArea" | "image";
     styles?: IStyleProperties;
}

export interface IRenderElementProps {
     element: IEmailConfig;
     selectedElement: IEmailConfig | null;
     setSelectedElement: (e: IEmailConfig) => void;
     updateElementValue: (id: string, value: string) => void;
}

export interface IEditorProps {
     selectedElement: IEmailConfig | null;
     updateElementStyle: (
       id: string,
       property: keyof IStyleProperties,
       value: string | number
     ) => void;
}
