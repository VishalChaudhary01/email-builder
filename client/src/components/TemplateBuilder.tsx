import { useEffect, useState } from "react";
import { axios } from "../axios";
import { initialEmailElements } from "../constants";
import { IEmailConfig, IStyleProperties } from "@/types";
import { RenderElement } from "./RenderElement";
import { Editor } from "./Editor";
import { renderLayout } from "@/lib/renderLayout";
import { Button } from "./ui/button";
import { transformConfig } from "@/lib/utils";

export const TemplateBuilder = () => {
  const [layout, setLayout] = useState<string>("");
  const [emailConfig, setEmailConfig] = useState<IEmailConfig[]>(initialEmailElements);
  const [selectedElement, setSelectedElement] = useState<IEmailConfig | null>(null);

  useEffect(() => {
    fetchLayout();
  }, []);

  const fetchLayout = async () => {
    try {
      const response = await axios.get("/api/email/getEmailLayout");
      setLayout(response.data.layout);

      // If there are saved configurations, merge them with initial elements
      if (response.data.emailConfig) {
        setEmailConfig(response.data.emailConfig);
      }
    } catch (error) {
      console.error("Error fetching layout: ", error);
    }
  };

  const updateElementValue = (id: string, newValue: string) => {
    setEmailConfig((prev) =>
      prev.map((e) => (e.id === id ? { ...e, value: newValue } : e))
    );
  };

  const updateElementStyle = (
    id: string,
    property: keyof IStyleProperties,
    value: string | number
  ) => {
    setEmailConfig((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, styles: { ...e.styles, [property]: value } }
          : e
      )
    );
  };

  const saveTemplate = async () => {
    try {
      const transformedConfig = transformConfig(emailConfig);
      const resopnse = await axios.post("/api/email/saveEmailConfig", transformedConfig);
      console.log(resopnse);
    } catch (error) {
      console.error("Error saving template:", error);
    }
  };

  return (
    <div className="w-full flex gap-4 min-h-screen">
      <div className="w-2/3 space-y-12 mb-6">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-700 mb-2">
            Edit the content of email template
          </h2>
          <div className="border border-gray-400 rounded-md p-6 space-y-4">
            {emailConfig.map((element) => (
              <div key={element.id} className="flex flex-col items-center justify-center">
                <RenderElement element={element} selectedElement={selectedElement} setSelectedElement={setSelectedElement} updateElementValue={updateElementValue} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-3xl font-bold text-gray-700">
            Preview
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: renderLayout(layout, emailConfig) }}
            className="w-full"
          ></div>
          <div className="flex items-center justify-center gap-4">
            <Button onClick={saveTemplate} className="w-36 md:w-60">Save</Button>
            <Button onClick={saveTemplate} className="w-36 md:w-60">Download</Button>
          </div>
        </div>
      </div>
      <Editor selectedElement={selectedElement} updateElementStyle={updateElementStyle} />
    </div>
  );
};
