import { NextApiRequest, NextApiResponse } from 'next';
import {
  ChatCompletionResponseMessage,
  Configuration,
  OpenAIApi,
} from 'openai';
import prisma from '@/lib/prisma';

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

  // test data to avoid hitting gpt
  // {
  //   data: {
  //     choices: [
  //       {
  //         message: 'hello world'
  //       }
  //     ]
  //   }
  // }

  const splitResponse = completion.data.choices[0].message?.content?.split(':') || [];

  console.log(completion.data.choices[0].message);
  try {
    const prismaResponse = await prisma.trip.create({
      data: {
        gptResponse: completion.data.choices[0].message?.content || '',
        prompt: req.body,
        location: splitResponse[0] || '',
      },
    });
    console.log(prismaResponse);
  } catch (e) {
    console.log(e)
  }

  res.status(200).json(completion.data.choices[0].message);
}
