/* global PhenomicConfig */
import path from "path"

import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"

const nodeModules = path.join(process.cwd(), "node_modules")
module.exports = (config: PhenomicConfig) => {
  // hot loading for postcss config
  // until this is officially supported
  // https://github.com/postcss/postcss-loader/issues/66
  const postcssPluginFile = require.resolve("./postcss.config.js")
  const postcssPlugins = (webpackInstance) => {
    webpackInstance.addDependency(postcssPluginFile)
    delete require.cache[postcssPluginFile]
    return require(postcssPluginFile)(config)
  }

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
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve("babel-loader"),
              options: {
                babelrc: false,
                presets: [require.resolve("@phenomic/babel-preset")],
                plugins: [require.resolve("react-hot-loader/babel")]
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
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: require.resolve("style-loader"),
            use: [
              require.resolve("css-loader")
            ]
          })
        },
        {
          test: /\.css$/,
          include: [
            /react-toolbox/
          ],
          loader: ExtractTextPlugin.extract({
            fallback: require.resolve("style-loader"),
            use: [
              {
                loader: require.resolve("css-loader"),
                query: {
                  modules: true,
                  localIdentName: (
                    process.env.NODE_ENV === "production"
                    ? "[hash:base64:5]"
                    : "[path][name]--[local]--[hash:base64:5]"
                  ),
                },
              },
              {
                loader: require.resolve("postcss-loader"),
                // query for postcss can't be used right now
                // https://github.com/postcss/postcss-loader/issues/99
                // meanwhile, see webpack.LoaderOptionsPlugin in plugins list
                // query: { plugins: postcssPlugins },
              },
            ],
          }),
        },
        {
          test: /\.woff(2)?$/,
          loader: require.resolve("url-loader"),
          include: [
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
            /typeface-roboto/
          ],
          query: {
            name: "fonts/[name].[hash].[ext]"
          }
        }
      ]
    },
    plugins: [
      // You should be able to remove the block below when the following
      // issue has been correctly handled (and postcss-loader supports
      // "plugins" option directly in query, see postcss-loader usage above)
      // https://github.com/postcss/postcss-loader/issues/99
      new webpack.LoaderOptionsPlugin({
        test: /\.css$/,
        options: {
          postcss: postcssPlugins,
          // required to avoid issue css-loader?modules
          // this is normally the default value, but when we use
          // LoaderOptionsPlugin, we must specify it again, otherwise,
          // context is missing (and css modules names can be broken)!
          context: __dirname,
        },
      }),
      new ExtractTextPlugin({
        filename: "styles.css",
        disable: process.env.PHENOMIC_ENV !== "static"
      }),
      process.env.PHENOMIC_ENV !== "static" &&
        new webpack.HotModuleReplacementPlugin(),
      process.env.NODE_ENV === "production" &&
        new webpack.optimize.UglifyJsPlugin()
    ].filter(item => item),

    resolve: {
      // react-native(-web) | react-primitives
      extensions: [".web.js", ".js", ".json"],
      alias: {
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
