import React from "react";
import Head from "react-helmet";

import pkg from "package.json";

const faviconVersionString = "?v=1";
const favicon = file => "/assets/" + file + faviconVersionString;

const Favicon = () => {
  return (
    <div hidden="true">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={favicon("favicon-32x32.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={favicon("favicon-16x16.png")}
        />
        <link rel="shortcut icon" href={favicon("favicon.ico")} />
      </Head>
      {process.env.NODE_ENV === "production" && (
        <Head>
          <link rel="manifest" href={favicon("manifest.json")} />
          <link
            rel="yandex-tableau-widget"
            href={favicon("yandex-browser-manifest.json")}
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={favicon("apple-touch-icon-57x57.png")}
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={favicon("apple-touch-icon-60x60.png")}
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={favicon("apple-touch-icon-72x72.png")}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={favicon("apple-touch-icon-76x76.png")}
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={favicon("apple-touch-icon-114x114.png")}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={favicon("apple-touch-icon-120x120.png")}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={favicon("apple-touch-icon-144x144.png")}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={favicon("apple-touch-icon-152x152.png")}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={favicon("apple-touch-icon-180x180.png")}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={favicon("android-chrome-192x192.png")}
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-title" content={pkg.name} />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000" />
          <meta name="application-name" content={pkg.name} />
          <meta name="msapplication-TileColor" content="#000" />
          <meta
            name="msapplication-TileImage"
            content={favicon("mstile-144x144.png")}
          />
          <meta
            name="msapplication-config"
            content={favicon("browserconfig.xml")}
          />
        </Head>
      )}
    </div>
  );
};

export default Favicon;
