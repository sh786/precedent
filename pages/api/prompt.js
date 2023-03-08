import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: req.body,
    });
    res.status(200).json({ text: completion.data.choices[0].text });
}