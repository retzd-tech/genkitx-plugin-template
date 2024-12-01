import { generate } from "@genkit-ai/ai";
import { geminiPro as geminiProModel } from "@genkit-ai/googleai";

import { FlowOptions, PluginOptions, History } from "../interfaces";

const getHistories = () => {
  const histories : History[] = [];
  histories.push({
    role: "user",
    content: [{ text: "This is the Generative AI plugin I made at GDG Jakarta Devfest 2024" }],
  });
  histories.push({
    role: "model",
    content: [{ text: "That's amazing!" }],
  });
  return histories;
};

export const retrieveResponse = async (
  flowOptions: FlowOptions,
  pluginOptions: PluginOptions
) => {
  const {
    prompt,
    temperature,
    maxOutputTokens,
    topK,
    topP,
    stopSequences,
  } = flowOptions;
  const { apiKey } = pluginOptions;

  // you can put api key check here if needed

  const retrievalConfig = {
    temperature: temperature || 0.1,
    maxOutputTokens: maxOutputTokens || 500,
    topK: topK || 1,
    topP: topP || 0,
    stopSequences: stopSequences || [],
  };

  const histories = getHistories();

  const promptResult = await generate({
    history: histories,
    prompt,
    model: geminiProModel,
    config: retrievalConfig,
  });

  return promptResult.text();
};
