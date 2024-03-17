import type { Signal } from "@builder.io/qwik";
import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import testImg from "/test.jpg";
import { AdjustPanel } from "~/components/adjust-panel";

export default component$(() => {
  const imgSrc: Signal<string | null> = useSignal(null);
  const mainFontState = useStore({
    hidden: false,
    rotation: 0,
    fontSize: 40,
    fontColor: "#ffffff",
    fontStyle: "normal",
    underline: false,
    italic: false,
    horizontal: false,
    direction_reverse: false,
  });

  const imageState = useStore({
    roundness: 0,
    size: 70,
    rotation: 0,
  });

  const miscState = useStore({
    backgroundColor: "#f3212f",
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
        <div class="">
          <div class="rounded border border-slate-400 p-4">
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
              backgroundColor: miscState.backgroundColor,
              flexDirection: `${mainFontState.horizontal ? "row" : "column"}${mainFontState.direction_reverse ? "-reverse" : ""}`,
            }}
            class="flex h-[500px] w-[800px] items-center justify-center overflow-scroll"
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
              PLACE TEXT
            </h4>
            <div
              style={{
                width: `${imageState.size}%`,
                height: `${imageState.size}%`,
              }}
              class="h-2/3 max-h-full max-w-full"
            >
              <img
                src={testImg}
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
