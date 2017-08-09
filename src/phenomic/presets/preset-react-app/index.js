import bundlerWebpack from "@phenomic/plugin-bundler-webpack";
import collectorFiles from "@phenomic/plugin-collector-files";
import transformJson from "@phenomic/plugin-transform-json";
import apiRelatedContent from "@phenomic/plugin-api-related-content";
import publicAssets from "@phenomic/plugin-public-assets";

import transformMarkdown from "../../plugins/plugin-transform-markdown";
import rendererReact from "../../plugins/plugin-renderer-react";

export default function() {
  return {
    plugins: [
      bundlerWebpack,
      rendererReact,
      transformMarkdown,
      transformJson,
      collectorFiles,
      apiRelatedContent,
      publicAssets
    ]
  };
}
