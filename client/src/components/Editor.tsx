import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { IEditorProps } from "@/types";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { fontSizes, fontWeights, textAligns, textTransforms } from "@/constants";

export const Editor = ({ selectedElement, updateElementStyle }: IEditorProps) => {
  return (
    <div className="w-1/3">
      <h2 className="text-center text-3xl font-bold text-gray-700 mb-2">
        Editor
      </h2>

      <div className="space-y-4 border border-gray-400 p-6 rounded-md min-h-[520px]">
        {selectedElement && (
          <div>
            <h3 className="text-xl text-center border-b font-semibold text-gray-700 mb-2">
              {selectedElement.name.toUpperCase()}
            </h3>
            <div>
              <Label className="text-base font-medium">Text Align</Label>
              <RadioGroup
                className="flex flex-wrap gap-2 p-2 rounded border"
                value={selectedElement?.styles?.textAlign}
              >
                {textAligns.map((ta) => (
                  <div key={ta.value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={ta.value}
                      id={ta.value}
                      className="hidden"
                    />
                    <Label
                      htmlFor={ta.name}
                      onClick={() => {
                        updateElementStyle(
                          selectedElement.id,
                          "textAlign",
                          ta.value
                        );
                      }}
                      className="bg-gray-100 px-2 py-0.5 rounded-md cursor-pointer font-normal"
                    >
                      {ta.name.toUpperCase()}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {(selectedElement.type === "text" ||
              selectedElement.type === "textArea") && (
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Font Size</Label>
                  <RadioGroup
                    className="flex flex-wrap gap-2 p-2 rounded border"
                    value={selectedElement?.styles?.fontSize}
                  >
                    {fontSizes.map((fs) => (
                      <div
                        key={fs.value}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={fs.value}
                          id={fs.value}
                          className="hidden"
                        />
                        <Label
                          htmlFor={fs.name}
                          onClick={() => {
                            updateElementStyle(
                              selectedElement.id,
                              "fontSize",
                              fs.value
                            );
                          }}
                          className="bg-gray-100 px-2 py-0.5 rounded-md cursor-pointer font-normal"
                        >
                          {fs.name.toUpperCase()}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-medium">Font Weight</Label>
                  <RadioGroup
                    className="flex flex-wrap gap-2 p-2 rounded border"
                    value={selectedElement?.styles?.fontWeight}
                  >
                    {fontWeights.map((fw) => (
                      <div
                        key={fw.value}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={fw.value}
                          id={fw.value}
                          className="hidden"
                        />
                        <Label
                          htmlFor={fw.name}
                          onClick={() =>
                            updateElementStyle(
                              selectedElement.id,
                              "fontWeight",
                              fw.value
                            )
                          }
                          className="bg-gray-100 px-2 py-0.5 rounded-md cursor-pointer font-normal"
                        >
                          {fw.name.toUpperCase()}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-medium">
                    Text Transform
                  </Label>
                  <RadioGroup
                    className="flex flex-wrap gap-2 p-2 rounded border"
                    value={selectedElement?.styles?.textTransform}
                  >
                    {textTransforms.map((tt) => (
                      <div
                        key={tt.value}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={tt.value}
                          id={tt.value}
                          className="hidden"
                        />
                        <Label
                          htmlFor={tt.name}
                          onClick={() =>
                            updateElementStyle(
                              selectedElement.id,
                              "textTransform",
                              tt.value
                            )
                          }
                          className="bg-gray-100 px-2 py-0.5 rounded-md cursor-pointer font-normal"
                        >
                          {tt.name.toUpperCase()}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-medium">Color</Label>
                  <Input
                    className="h-10 cursor-pointer"
                    type="color"
                    value={selectedElement?.styles?.color}
                    onChange={(e) =>
                      updateElementStyle(
                        selectedElement.id,
                        "color",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            )}

            {selectedElement.type === "image" && (
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Width</Label>
                  <Input
                    type="number"
                    value={selectedElement?.styles?.width}
                    onChange={(e) =>
                      updateElementStyle(
                        selectedElement.id,
                        "width",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label className="text-base font-medium">Height</Label>
                  <Input
                    type="number"
                    value={selectedElement?.styles?.height}
                    onChange={(e) =>
                      updateElementStyle(
                        selectedElement.id,
                        "height",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
