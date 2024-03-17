import type { Signal } from "@builder.io/qwik";
import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import testImg from "/test.jpg";

export default component$(() => {
  const imgSrc: Signal<string | null> = useSignal(null);
  // Text settings
  const mainFontState = useStore({
    fontSize: 40,
    fontColor: "#ffffff",
    fontStyle: "normal",
    underline: false,
    italic: false,
  });

  const imageState = useStore({
    roundness: 0,
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
            style={{ backgroundColor: miscState.backgroundColor }}
            class="flex h-[500px] w-[800px] flex-col items-center justify-around"
          >
            <h4
              style={{
                fontSize: mainFontState.fontSize,
                color: mainFontState.fontColor,
                fontStyle: mainFontState.italic ? "italic" : "normal",
                fontWeight: mainFontState.fontStyle,
                textDecoration: mainFontState.underline ? "underline" : "none",
                textDecorationThickness:
                  mainFontState.fontStyle === "lighter" ? "0.0001px" : "auto",
                textDecorationColor: mainFontState.fontColor,
              }}
              class="font-bold"
              contentEditable="true"
            >
              PLACE TEXT
            </h4>
            <div class="h-2/3 w-2/3">
              <img
                src={testImg}
                width={800}
                height={800}
                style={{
                  borderRadius: imageState.roundness,
                }}
              />
            </div>
          </div>
        </div>
        <div class="min-h-full w-full rounded border border-slate-400 bg-slate-900 p-6">
          <h3 class="text-2xl font-bold">Adjust</h3>
          <div class="h-full">
            <div class="mt-6 flex flex-col gap-y-4 rounded border border-slate-400 p-4">
              <span class="font-bold">Image</span>
              <div class="flex items-center gap-x-2">
                <label
                  class="text-xs font-bold text-slate-400"
                  for="font-size-input"
                >
                  Roundness
                </label>
                <input
                  id="image-roundness-input"
                  value={imageState.roundness}
                  type="number"
                  class="text-black p-1 rounded h-6 w-16"
                  min={0}
                  max={100}
                  onChange$={$((event: any) => {
                    const val = (event.target as HTMLInputElement).value;
                    imageState.roundness =  Number.parseInt(
                      ,val
                    );
                  })}
                />
              </div>
            </div>
            <div class="mt-6 flex flex-col gap-y-4 rounded border border-slate-400 p-4">
              <span class="font-bold">Misc</span>
              <div class="flex items-center gap-x-2">
                <label
                  class="text-xs font-bold text-slate-400"
                  for="background-color-input"
                >
                  Background Color
                </label>
                <input
                  value={miscState.backgroundColor}
                  id="background-color-input"
                  class="h-6 w-12 rounded border border-slate-400 p-1"
                  type="color"
                  onChange$={$((event: any) => {
                    miscState.backgroundColor = (
                      event.target as HTMLInputElement
                    ).value;
                  })}
                />
              </div>
            </div>
            <div class="mt-6 flex flex-col gap-y-4 rounded border border-slate-400 p-4">
              <span class="font-bold">Text</span>
              <div class="flex items-center gap-x-2">
                <label
                  class="text-xs font-bold text-slate-400"
                  for="font-size-input"
                >
                  Font Size
                </label>
                <input
                  id="font-size-input"
                  value={mainFontState.fontSize}
                  type="range"
                  min={20}
                  max={100}
                  onChange$={$((event: any) => {
                    mainFontState.fontSize = Number.parseInt(
                      (event.target as HTMLInputElement).value,
                    );
                  })}
                />
              </div>
              <div class="flex items-center gap-x-4">
                <div>
                  <label
                    class="mr-2 text-xs font-bold text-slate-400"
                    for="font-style-input"
                  >
                    Style
                  </label>
                  <select
                    id="font-style-input"
                    class="rounded border border-slate-400 bg-transparent p-1"
                    value={mainFontState.fontStyle}
                    name="fontStyle"
                    onChange$={(ev) =>
                      (mainFontState.fontStyle = (
                        ev.target as HTMLInputElement
                      ).value)
                    }
                  >
                    <option value="lighter">Light</option>
                    <option selected value="normal">
                      Normal
                    </option>
                    <option value="bold">Bold</option>
                  </select>
                </div>
              </div>
              <div class="flex items-center gap-x-2">
                <div>
                  <label
                    class="mr-2 text-xs font-bold text-slate-400"
                    for="font-italic-input"
                  >
                    Italic
                  </label>
                  <input
                    id="font-italic-input"
                    checked={mainFontState.italic}
                    type="checkbox"
                    onChange$={$(() => {
                      mainFontState.italic = !mainFontState.italic;
                    })}
                  />
                </div>
                <div>
                  <label
                    class="mr-2 text-xs font-bold text-slate-400"
                    for="font-underline-input"
                  >
                    Underline
                  </label>
                  <input
                    id="font-underline-input"
                    checked={mainFontState.underline}
                    type="checkbox"
                    onChange$={$(() => {
                      mainFontState.underline = !mainFontState.underline;
                    })}
                  />
                </div>
              </div>
              <div class="flex items-center gap-x-2">
                <label
                  class="text-xs font-bold text-slate-400"
                  for="font-color-input"
                >
                  Font Color
                </label>
                <input
                  value={mainFontState.fontColor}
                  id="font-color-input"
                  type="color"
                  class="h-6 w-12 rounded border border-slate-400 p-1"
                  onChange$={$((event: any) => {
                    mainFontState.fontColor = (
                      event.target as HTMLInputElement
                    ).value;
                  })}
                />
              </div>
            </div>
          </div>
        </div>
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
