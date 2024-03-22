/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";
import { HexAlphaColorPicker, HexColorInput } from "react-colorful";
import { Popover } from "react-tiny-popover";

function ReactColorful({
  color,
  onChange,
}: {
  color: string;
  onChange: (newColor: string) => void;
}) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["bottom", "right", "top", "left"]} // preferred positions by priority
      onClickOutside={() => setIsPopoverOpen(false)}
      content={
        <div className="">
          <HexAlphaColorPicker color={color} onChange={onChange} />
          <div className="mt-4 text-center">
            <HexColorInput
              color={color}
              onChange={onChange}
              prefixed
              alpha
              className="w-2/3 text-center text-sm font-bold rounded border-2 border-slate-400 bg-gray-300 p-1 uppercase outline-none focus:border-blue-600"
            />
          </div>
        </div>
      }
    >
      <div
        style={{ backgroundColor: color }}
        className="rounded border px-6 py-2"
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      />
    </Popover>
  );
}

export const QwikColorful = qwikify$(ReactColorful, { eagerness: "hover" });
