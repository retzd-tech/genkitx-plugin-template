import { genkitPlugin } from "@genkit-ai/core";
import { defineFlow } from "@genkit-ai/flow";

import { PluginOptions } from "./interfaces";
import { pluginAction } from "./actions";
import { flowConfig } from "./config";
import { isApiKeyExist } from "./utilities";
import { PLUGIN_NAME } from "./constants";

export const devfestDepokPlugin = genkitPlugin(
  PLUGIN_NAME,
  async (pluginOptions: PluginOptions) => {
    isApiKeyExist(pluginOptions);
    defineFlow(flowConfig, (flowOptions) =>
      pluginAction(flowOptions, pluginOptions)
    );
  }
);
