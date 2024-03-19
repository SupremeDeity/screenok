import type { Signal } from "@builder.io/qwik";
import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import testImg from "./Maestro.png";
import { AdjustPanel } from "~/components/adjust-panel";

export default component$(() => {
  const imgSrc: Signal<string | null> = useSignal(null);
  const mainFontState = useStore({
    hidden: false,
    rotation: -3,
    fontSize: 55,
    fontColor: "#571818",
    fontStyle: "lighter",
    underline: false,
    italic: false,
    horizontal: true,
    direction_reverse: false,
  });

  const imageState = useStore({
    roundness: 6,
    size: 55,
    rotation: -3,
  });

  const miscState = useStore({
    backgroundColor: "#ff9494",
    paddingX: 0,
    paddingY: 0,
    gap: 50,
  });

  const changeImgSrc = $((event: any) => {
    const imageFiles = event.target.files;
    const imageFilesLength = imageFiles.length;
    if (imageFilesLength > 0) {
      const imageSrc = URL.createObjectURL(imageFiles[0]);
      imgSrc.value = imageSrc;
    }
  });

  return (
    <>
      <div class="border-b border-b-slate-400 bg-slate-600 p-4 text-center font-bold uppercase">
        <h1 class="text-xl text-slate-200">Screenok</h1>
        <h6 class="text-xs text-slate-400">Screenshot Mockup</h6>
      </div>
      <div class="flex w-full justify-center gap-x-4 p-4 text-slate-200">
        <div>
          <div class="mb-4 h-6 p-4 rounded border border-slate-400">
            <label class="font-bold" for="file-upload">
              Upload Image
            </label>
            <input
              class="hidden"
              accept="image/*"
              type="file"
              id="file-upload"
              onChange$={changeImgSrc}
            />
          </div>
          <div
            style={{
              gap: miscState.gap,
              paddingTop: miscState.paddingY,
              paddingBottom: miscState.paddingY,
              paddingLeft: miscState.paddingX,
              paddingRight: miscState.paddingX,
              backgroundColor: miscState.backgroundColor,
              flexDirection: `${mainFontState.horizontal ? "row" : "column"}${mainFontState.direction_reverse ? "-reverse" : ""}`,
            }}
            class="flex border border-slate-400 rounded min-h-[500px] w-[800px] items-center justify-center overflow-hidden"
          >
            <h4
              style={{
                display: mainFontState.hidden ? "none" : "block",
                fontSize: mainFontState.fontSize,
                color: mainFontState.fontColor,
                fontStyle: mainFontState.italic ? "italic" : "normal",
                fontWeight: mainFontState.fontStyle,
                textDecoration: mainFontState.underline ? "underline" : "none",
                textDecorationThickness:
                  mainFontState.fontStyle === "lighter" ? "0.0001px" : "auto",
                textDecorationColor: mainFontState.fontColor,
                rotate: `${mainFontState.rotation}deg`,
              }}
              class="font-bold"
              contentEditable="true"
            >
              MAESTRO
            </h4>
            <div
              style={{
                width: `${imageState.size}%`,
                height: `${imageState.size}%`,
              }}
              class="max-h-full max-w-full"
            >
              <img
                src={imgSrc.value ? imgSrc.value : testImg}
                width={800}
                height={800}
                style={{
                  rotate: `${imageState.rotation}deg`,
                  borderRadius: imageState.roundness,
                }}
              />
            </div>
          </div>
        </div>
        <AdjustPanel
          imageState={imageState}
          mainFontState={mainFontState}
          miscState={miscState}
        />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Screenok",
  meta: [
    {
      name: "description",
      content: "Create mockups from your screenshots",
    },
  ],
};
