interface HistoryContent {
  text: string;
}

export interface History {
  role: 'user' | 'model';
  content: HistoryContent[];
}

export interface FlowOptions {
  prompt: string;
  temperature?: number;
  maxOutputTokens?: number;
  topK?: number;
  topP?: number;
  stopSequences?: string[];
}

export interface IndexerFlowOptions {
  dataPath: string;
  indexOutputPath: string;
  chunkSize?: number;
  separator?: string;
}

export interface PluginOptions {
  apiKey?: string;
}