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
        <title>Screenok</title>
        <meta
          name="description"
          content="Create mockups from your screenshots"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Screenok" />
        <meta property="og:url" content="https://screenok.vercel.app" />
        <meta
          property="og:image"
          content="https://screenok.vercel.app/og.svg"
        />
        <meta
          property="og:description"
          content="Generate Screenshot Mockups."
        />
        <link rel="manifest" href="/manifest.json" />
        <ServiceWorkerRegister />
      </head>
      <body class="bg-slate-800" lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
