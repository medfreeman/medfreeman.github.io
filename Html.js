/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "csshook" }]*/
import React from "react";
import Head from "react-helmet";
import csshook from "css-modules-require-hook/preset";

import ReduxProvider from "./src/providers/ReduxProvider";
import ThemeProvider from "./src/providers/ThemeProvider";

export default ({ App, render }: PhenomicHtmlPropsType) => {
  // if needed, you can know if you are in development or in static rendering
  // const isDev = process.env.PHENOMIC_ENV === "development"
  const { Main, State, Script, Style } = render(
    <ReduxProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  );
  const helmet = Head.renderStatic();
  return (
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.meta.toComponent()}
        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        <Style />
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        <Main />
        <State />
        <Script />
      </body>
    </html>
  );
};
