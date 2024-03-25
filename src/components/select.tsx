import type { PropsOf } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

export const Select = component$(({ ...props }: PropsOf<"select">) => {
  return (
    <select
      class="rounded border border-slate-400 bg-gray-50 p-2 text-sm text-black focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      {...props}
    >
      <Slot />
    </select>
  );
});
