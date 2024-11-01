import { retrieveResponse } from "./../retriever";
import {
  FlowOptions,
  PluginOptions,
} from "./../interfaces";

export const pluginAction = async (
  flowOptions: FlowOptions,
  pluginOptions: PluginOptions
) => {
  try {
    return await retrieveResponse(flowOptions, pluginOptions);
  } catch (error) {
    return `Error generating prompt response, ${error}`;
  }
};
