import type { Signal } from "@builder.io/qwik";
import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import html2canvas from "html2canvas";

import { AdjustPanel } from "~/components/adjust-panel";

export default component$(() => {
  const imgSrc: Signal<string | null> = useSignal(null);
  const mainFontState = useStore({
    hidden: false,
    rotation: 0,
    fontSize: 55,
    font: "Quicksand",
    fontColor: "#571818",
    fontStyle: "normal",
    underline: false,
    italic: false,
    horizontal: false,
    direction_reverse: false,
  });

  const imageState = useStore({
    roundness: 0,
    size: 60,
    rotation: 0,
    borderEnabled: false,
    borderColor: "#000000",
    borderWidth: 2,
  });

  const miscState = useStore({
    backgroundColor: "#ff9494",
    paddingX: 0,
    paddingY: 0,
    gap: 0,
  });

  const canvasRef: Signal<any> = useSignal();

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
      <div class="flex w-full h-full justify-evenly items-center gap-x-4 p-2 text-slate-200">
        <div>
          <div class="mb-2 flex items-center gap-x-4">
            <button
              class="rounded border border-slate-400 bg-slate-900 p-1.5 text-xs font-bold hover:bg-slate-600/80"
              onClick$={() => {
                html2canvas(canvasRef.value, {
                  backgroundColor: "null",
                }).then(function (canvas) {
                  const url = canvas.toDataURL("image/png");
                  const link = document.createElement("a");
                  link.download = `screenok-${(+new Date()).toString(36)}.png`;
                  link.href = url;
                  link.click();
                });
              }}
            >
              SAVE
            </button>
            <span class="rounded border border-slate-400 bg-slate-600 p-1.5 text-xs font-bold">
              Semi-transparent colors will be affected by the site's background
              color in this preview.
            </span>
          </div>
          <input
            class="hidden"
            accept="image/*"
            type="file"
            id="file-upload"
            onChange$={changeImgSrc}
          />
          <div
            ref={canvasRef}
            style={{
              gap: miscState.gap,
              paddingTop: miscState.paddingY,
              paddingBottom: miscState.paddingY,
              paddingLeft: miscState.paddingX,
              paddingRight: miscState.paddingX,
              backgroundColor: miscState.backgroundColor,
              flexDirection: `${mainFontState.horizontal ? "row" : "column"}${mainFontState.direction_reverse ? "-reverse" : ""}`,
            }}
            class="flex min-h-[500px] w-[800px] items-center justify-center overflow-hidden"
          >
            <h4
              style={{
                display: mainFontState.hidden ? "none" : "block",
                fontSize: mainFontState.fontSize,
                lineHeight: `${mainFontState.fontSize}px`,
                color: mainFontState.fontColor,
                fontStyle: mainFontState.italic ? "italic" : "normal",
                fontWeight: mainFontState.fontStyle,
                textDecoration: mainFontState.underline ? "underline" : "none",
                textDecorationThickness:
                  mainFontState.fontStyle === "lighter" ? "0.0001px" : "auto",
                textDecorationColor: mainFontState.fontColor,
                transform: `rotate(${mainFontState.rotation}deg)`,
                fontFamily: `${mainFontState.font} Variable`,
              }}
              class="font-bold"
              contentEditable="true"
            >
              PLACE TEXT
            </h4>
            <label class="cursor-pointer" for="file-upload">
              {imgSrc.value ? (
                <img
                  src={imgSrc.value}
                  width={800}
                  height={800}
                  class="mx-auto block border"
                  style={{
                    transform: `rotate(${imageState.rotation}deg)`,
                    borderRadius: imageState.roundness,
                    width: `${imageState.size}%`,
                    height: `${imageState.size}%`,
                    borderColor: `${imageState.borderColor}`,
                    borderWidth: imageState.borderEnabled
                      ? `${imageState.borderWidth}px`
                      : "0px",
                  }}
                />
              ) : (
                <div class="flex size-64 items-center justify-center rounded bg-slate-300 text-xl font-bold uppercase text-black">
                  Upload an image
                </div>
              )}
            </label>
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
