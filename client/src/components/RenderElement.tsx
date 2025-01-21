import { getElementStyles } from "@/lib/utils";
import { IRenderElementProps } from "@/types";

export const RenderElement = ({ element, selectedElement, setSelectedElement, updateElementValue }: IRenderElementProps) => {
  const commonStyles = {
    cursor: "pointer",
    border: selectedElement?.id === element.id ? "1px solid blue" : "none",
  };

  switch (element.type) {
    case "text":
      return (
        <div
          className="w-full text-center p-2 rounded-md bg-gray-50"
          onClick={() => setSelectedElement(element)}
          style={commonStyles}
        >
          <input
            className="w-full h-[64px] text-center text-xl font-semibold"
            type="text"
            value={element.value}
            onChange={(e) => updateElementValue(element.id, e.target.value)}
            style={getElementStyles(element)}
          />
        </div>
      );

    case "textArea":
      return (
        <div
          className="w-full p-2 rounded-md bg-gray-50 flex items-center justify-center"
          onClick={() => setSelectedElement(element)}
          style={commonStyles}
        >
          <textarea
            rows={6}
            cols={40}
            className="w-full"
            value={element.value}
            onChange={(e) => updateElementValue(element.id, e.target.value)}
            style={getElementStyles(element)}
          />
        </div>
      );

    case "image":
      return (
        <div
          className="w-40 h-40 bg-white p-2 rounded-full flex items-center justify-center"
          onClick={() => setSelectedElement(element)}
          style={commonStyles}
        >
          {element.value && (
            <img
              src={element.value}
              alt="Logo"
              style={getElementStyles(element)}
              className="object-cover"
            />
          )}
          <input
            type="file"
            className="sr-only"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                const reader = new FileReader();
                reader.onload = (event) => {
                  updateElementValue(
                    element.id,
                    event.target?.result as string
                  );
                };
                reader.readAsDataURL(e.target.files[0]);
              }
            }}
          />
        </div>
      );
  }
};
