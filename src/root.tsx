import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Screenok</title>
        <meta name="description" content="Generate Screenshot Mockups." />

        <meta property="og:url" content="https://screenok.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Screenok" />
        <meta
          property="og:description"
          content="Generate Screenshot Mockups."
        />
        <meta
          property="og:image"
          content="https://screenok.vercel.app/og.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="screenok.vercel.app" />
        <meta property="twitter:url" content="https://screenok.vercel.app/" />
        <meta name="twitter:title" content="Screenok" />
        <meta
          name="twitter:description"
          content="Generate Screenshot Mockups."
        />
        <meta
          name="twitter:image"
          content="https://screenok.vercel.app/og.svg"
        />

        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <link rel="manifest" href="/manifest.json" />
        <ServiceWorkerRegister />
      </head>
      <body class="bg-slate-800" lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
