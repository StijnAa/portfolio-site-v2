import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: env.local,
});

const openai = new OpenAIApi(configuration);

const chat = async (req: any, res: any) => {
  // Prompt values
  const beforePrompt = `The following is a conversation with a fisherman on a boat in the japanese sea. The fisherman is helpful, creative, clever, and very friendly.`;

  // Construct the prompt
  let prompt = `${beforePrompt} \n\n ${req.body}`;

  // Log prompt

  //   Call OpenAI API
  const gptResponse = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [" The Visitor:", " Fisherman:"],
  });

  res.status(200).json({ textOutput: `${gptResponse.data.choices[0].text}` });
  console.log(prompt + gptResponse.data.choices[0].text);
};

export default chat;
