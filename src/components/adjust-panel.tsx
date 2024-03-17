import { $, component$ } from "@builder.io/qwik";

interface PanelProps {
  imageState: { roundness: number; size: number; rotation: number };
  mainFontState: {
    rotation: number;
    hidden: boolean;
    fontSize: number;
    fontColor: string;
    fontStyle: string;
    underline: boolean;
    italic: boolean;
    horizontal: boolean;
    direction_reverse: boolean;
  };
  miscState: { backgroundColor: string };
}

export const AdjustPanel = component$<PanelProps>(
  ({ imageState, mainFontState, miscState }) => {
    return (
      <div class="max-h-[560px] w-full rounded border border-slate-400 bg-slate-900 p-6  overflow-scroll">
        <h3 class="text-2xl font-bold">Adjust</h3>
        <div class="h-full">
          <div class="mt-6 flex flex-col gap-y-4 rounded border border-slate-400 p-4">
            <span class="font-bold">Image</span>
            <div class="flex items-center gap-x-2">
              <label
                class="text-xs font-bold text-slate-400"
                for="img-size-input"
              >
                Size
              </label>
              <input
                id="img-size-input"
                value={imageState.size}
                type="range"
                min={20}
                max={100}
                onChange$={$((event: any) => {
                  imageState.size = Number.parseInt(
                    (event.target as HTMLInputElement).value,
                  );
                })}
              />
            </div>
            <div class="flex items-center gap-x-2">
              <label
                class="text-xs font-bold text-slate-400"
                for="img-rotation-input"
              >
                Rotation
              </label>
              <input
                id="img-rotation-input"
                value={imageState.rotation}
                type="range"
                min={0}
                max={180}
                onChange$={$((event: any) => {
                  const val = Number.parseInt(
                    (event.target as HTMLInputElement).value,
                  );
                  imageState.rotation = Math.max(0, Math.min(val, 180));
                })}
              />
              <input
                id="image-rotation-input"
                value={imageState.rotation}
                type="number"
                class="h-6 w-16 rounded p-1 text-black"
                min={0}
                max={180}
                onChange$={$((event: any) => {
                  const val = Number.parseInt(
                    (event.target as HTMLInputElement).value,
                  );
                  imageState.rotation = Math.max(0, Math.min(val, 180));
                })}
              />
            </div>
            <div class="flex items-center gap-x-2">
              <label
                class="text-xs font-bold text-slate-400"
                for="img-roundness-input"
              >
                Roundness
              </label>
              <input
                id="img-roundness-input"
                value={imageState.roundness}
                type="range"
                min={0}
                max={100}
                onChange$={$((event: any) => {
                  const val = Number.parseInt(
                    (event.target as HTMLInputElement).value,
                  );
                  imageState.roundness = Math.max(0, Math.min(val, 100));
                })}
              />
              <input
                id="image-roundness-input"
                value={imageState.roundness}
                type="number"
                class="h-6 w-16 rounded p-1 text-black"
                min={0}
                max={100}
                onChange$={$((event: any) => {
                  const val = Number.parseInt(
                    (event.target as HTMLInputElement).value,
                  );
                  imageState.roundness = Math.max(0, Math.min(val, 100));
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
                class="mr-2 text-xs font-bold text-slate-400"
                for="font-horizontal-input"
              >
                Horizontal
              </label>
              <input
                id="font-horizontal-input"
                checked={mainFontState.horizontal}
                type="checkbox"
                onChange$={$(() => {
                  mainFontState.horizontal = !mainFontState.horizontal;
                })}
              />
              <label
                class="mr-2 text-xs font-bold text-slate-400"
                for="font-direction-reverse"
              >
                Reverse
              </label>
              <input
                id="font-direction-reverse"
                checked={mainFontState.direction_reverse}
                type="checkbox"
                onChange$={$(() => {
                  mainFontState.direction_reverse =
                    !mainFontState.direction_reverse;
                })}
              />
            </div>
            <div class="flex items-center gap-x-2">
              <label
                class="mr-2 text-xs font-bold text-slate-400"
                for="font-hidden-input"
              >
                Hidden
              </label>
              <input
                id="font-hidden-input"
                checked={mainFontState.hidden}
                type="checkbox"
                onChange$={$(() => {
                  mainFontState.hidden = !mainFontState.hidden;
                })}
              />
            </div>
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
            <div class="flex items-center gap-x-2">
              <label
                class="text-xs font-bold text-slate-400"
                for="font-rotation-input"
              >
                Rotation
              </label>
              <input
                id="font-rotation-input"
                value={mainFontState.rotation}
                type="range"
                min={-180}
                max={180}
                onChange$={$((event: any) => {
                  const val = Number.parseInt(
                    (event.target as HTMLInputElement).value,
                  );
                  mainFontState.rotation = Math.max(-180, Math.min(val, 180));
                })}
              />
              <input
                id="font-rotation-input"
                value={mainFontState.rotation}
                type="number"
                class="h-6 w-16 rounded p-1 text-black"
                min={-180}
                max={180}
                onChange$={$((event: any) => {
                  const val = Number.parseInt(
                    (event.target as HTMLInputElement).value,
                  );
                  mainFontState.rotation = Math.max(-180, Math.min(val, 180));
                })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);
