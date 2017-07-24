/* global PhenomicConfig */
import path from "path"

import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import FaviconsWebpackPlugin from "favicons-webpack-plugin"

import pkg from "./package.json"

const nodeModules = path.join(process.cwd(), "node_modules")
module.exports = (config: PhenomicConfig) => {

  return {
    entry: {
      [config.bundleName]: [
        process.env.PHENOMIC_ENV !== "static" &&
          require.resolve("webpack-hot-middleware/client"),
        process.env.PHENOMIC_ENV !== "static" &&
          require.resolve("react-hot-loader/patch"),
        "./App.js"
      ].filter(item => item)
    },
    output: {
      publicPath: "/", // @todo make this dynamic
      path: path.join(process.cwd(), "dist"),
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [
            /node_modules/,
            /\.font\.js$/
          ],
          use: [
            {
              loader: require.resolve("babel-loader"),
              options: {
                babelrc: false,
                presets: [require.resolve("@phenomic/babel-preset")],
                plugins: [
                  require.resolve("react-hot-loader/babel"),
                  require.resolve("babel-plugin-transform-function-bind")
                ]
              }
            },
            {
              loader: require.resolve("eslint-loader"),
              options: {
                emitWarning: (process.env.NODE_ENV === "production" ? false : true)
              }
            }
          ]
        },
        {
          test: /\.js$/,
          include: [
            /svg-inline-react/
          ],
          use: [
            {
              loader: require.resolve("babel-loader"),
              options: {
                babelrc: false,
                presets: [require.resolve("@phenomic/babel-preset")]
              }
            }
          ]
        },
        {
          test: /\.font\.js$/,
          loader: ExtractTextPlugin.extract({
            fallback: require.resolve("style-loader"),
            use: [
              {
                loader: require.resolve("css-loader")
              },
              {
                loader: require.resolve("webfonts-loader"),
                query: {
                  fileName: "fonts/[fontname].[hash].[ext]"
                }
              }
            ]
          })
        },
        {
          test: /\.global\.css$/,
          include:  [
            path.join(__dirname, "src")
          ],
          loader: ExtractTextPlugin.extract({
            fallback: require.resolve("style-loader"),
            use: [
              {
                loader: require.resolve("css-loader")
              },
              {
                loader: require.resolve("postcss-loader")
              }
            ]
          })
        },
        {
          test: /\.css$/,
          include: [
            path.join(__dirname, "src"),
            /react-toolbox/,
            /tachyons/
          ],
          exclude: [
            /\.global\.css$/,
          ],
          loader: ExtractTextPlugin.extract({
            fallback: require.resolve("style-loader"),
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: (
                    process.env.NODE_ENV === "production"
                      ? "[hash:base64:5]"
                      : "[path][name]--[local]--[hash:base64:5]"
                  ),
                },
              },
              {
                loader: require.resolve("postcss-loader")
              }
            ]
          }),
        },
        {
          test: /\.css$/,
          include: [
            /typeface-roboto/
          ],
          loader: ExtractTextPlugin.extract({
            fallback: require.resolve("style-loader"),
            use: [
              require.resolve("css-loader")
            ]
          })
        },
        {
          test: /\.woff(2)?$/,
          loader: require.resolve("url-loader"),
          include: [
            /Medcons/,
            /typeface-roboto/
          ],
          query: {
            limit: 10000,
            mimetype: "application/font-woff",
            name: "fonts/[name].[hash].[ext]"
          }
        },
        {
          test: /\.ttf$/,
          loader: require.resolve("url-loader"),
          include: [
            /Medcons/,
            /typeface-roboto/
          ],
          query: {
            limit: 10000,
            mimetype: "application/octet-stream",
            name: "fonts/[name].[hash].[ext]"
          }
        },
        {
          test: /\.svg$/,
          loader: require.resolve("url-loader"),
          include: [
            /Medcons/,
            /typeface-roboto/
          ],
          query: {
            limit: 10000,
            mimetype: "image/svg+xml",
            name: "fonts/[name].[hash].[ext]"
          }
        },
        {
          test: /\.eot$/,
          loader: require.resolve("file-loader"),
          include: [
            /Medcons/,
            /typeface-roboto/
          ],
          query: {
            name: "fonts/[name].[hash].[ext]"
          }
        },
        // svg as raw string to be inlined
        {
          test: /\.svg$/,
          include: [
            path.join(__dirname, "src/icons"),
          ],
          use: [
            {
              loader: "raw-loader",
            },
            {
              loader: "svgo-loader",
              options: {
                plugins: [
                  { removeTitle: true, removeDesc: true },
                  { convertColors: { shorthex: false } },
                  { convertPathData: false },
                ],
              },
            },
          ],
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "styles.css",
        ignoreOrder: true,
        disable: process.env.PHENOMIC_ENV !== "static"
      }),
      process.env.PHENOMIC_ENV !== "static" &&
        new webpack.HotModuleReplacementPlugin(),
      process.env.NODE_ENV === "production" &&
        new webpack.optimize.UglifyJsPlugin(),

      new webpack.DefinePlugin({
        PHENOMIC_URL: process.env.URL ? JSON.stringify(process.env.URL) : JSON.stringify("http://localhost:" + config.port),
        RECAPTCHA_SITE_KEY: JSON.stringify(pkg.recaptcha_site_key)
      }),

      process.env.NODE_ENV === "production"
        ? new FaviconsWebpackPlugin({
          logo: path.join(__dirname, "favicon.png"),
          appName: pkg.name,
          appDescription: pkg.description,
          developerName: pkg.author,
          developerURL: pkg.homepage,
          prefix: "assets/",
          persistentCache: false,
          inject: false,
          background: "#000",
          display: "browser",
          orientation: "portrait",
          start_url: "",
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: true,
            windows: true,
          },
        })
        : new FaviconsWebpackPlugin({
          logo: path.join(__dirname, "favicon.png"),
          prefix: "assets/",
          persistentCache: false,
          inject: false,
          icons: {
            android: false,
            appleIcon: false,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: false,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false,
          },
        })
    ].filter(item => item),

    resolve: {
      // react-native(-web) | react-primitives
      extensions: [".web.js", ".js", ".json"],
      alias: {
        "Elements": path.resolve(__dirname, "src/components/Elements"),
        "Layout": path.resolve(__dirname, "src/components/Layout"),
        "Meta": path.resolve(__dirname, "src/components/Meta"),
        "Templates": path.resolve(__dirname, "src/components/Templates"),
        "icons": path.resolve(__dirname, "src/icons"),
        "utils": path.resolve(__dirname, "src/utils"),
        "package.json": path.join(__dirname, "package.json"),

        "masonry": "masonry-layout",
        "isotope": "isotope-layout",

        "react-native": "react-native-web",

        // to ensure a single module is used
        react: path.resolve(path.join(nodeModules, "react")),
        "react-dom": path.resolve(path.join(nodeModules, "react-dom")),
        "react-router": path.resolve(path.join(nodeModules, "react-router"))
      }
    },

    // eslint-disable-next-line max-len
    // https://github.com/facebookincubator/create-react-app/blob/fbdff9d722d6ce669a090138022c4d3536ae95bb/packages/react-scripts/config/webpack.config.prod.js#L279-L285
    node: {
      fs: "empty",
      net: "empty",
      tls: "empty"
    }
  }
}
