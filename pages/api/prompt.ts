import { NextApiRequest, NextApiResponse } from 'next';
import {
  ChatCompletionResponseMessage,
  Configuration,
  OpenAIApi,
} from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

export type PromptResponse = ChatCompletionResponseMessage;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful travel planner.',
      },
      {
        role: 'user',
        content: req.body,
      },
    ],
  });

  console.log(completion.data.choices[0].message);

  res.status(200).json(completion.data.choices[0].message);
}
