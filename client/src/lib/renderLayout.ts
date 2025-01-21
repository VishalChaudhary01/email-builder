import { IEmailConfig } from "@/types";
import { formatStyleProperty } from "./utils";

export const renderLayout = (layout: string, emailConfig: IEmailConfig[]) => {
  if (!layout) return "<p>Loading...</p>";
  let updatedLayout = layout;

  emailConfig.forEach((config) => {
    // Replace content
    updatedLayout = updatedLayout.replace(
      new RegExp(`{{${config.name}}}`, "g"),
      config.value || ""
    );

    // Replace styles
    if (config.styles) {
      const styleString = Object.entries(config.styles)
        .filter(([_key, value]) => value !== undefined && value !== "")
        .map(([key, value]) => formatStyleProperty(key, value))
        .join("; ");

      updatedLayout = updatedLayout.replace(
        new RegExp(`{{${config.name}_styles}}`, "g"),
        styleString
      );
    } else {
      // Remove style placeholder if no styles exist
      updatedLayout = updatedLayout.replace(
        new RegExp(`{{${config.name}_styles}}`, "g"),
        ""
      );
    }
  });

  // Clean up any remaining unmatched placeholders
  updatedLayout = updatedLayout.replace(/{{[^}]+_styles}}/g, "");
  return updatedLayout;
};
