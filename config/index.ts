import * as z from "zod";

import {
  FLOW_NAME,
  SCHEMA_PROMPT,
  SCHEMA_RESULT,
} from "./../constants";

export const flowConfig = {
  name: FLOW_NAME,
  inputSchema: z.object({
    prompt: z.string().describe(SCHEMA_PROMPT),
  }),
  outputSchema: z.string().describe(SCHEMA_RESULT),
};
