import vocabularModel from '../models/vocabulary.schema.ts';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { OpenRouter } from '@openrouter/sdk';
type Request = express.Request;
type Response = express.Response;

// This is get all data from the database
export const getAllData = async (req: Request, res: Response) => {
  try {
    const vocabulary = await vocabularModel.find();
    res.status(200).json({ vocabulary });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
    console.log('The error comming in getAllData', err);
  }
};

// This function is ai calling

export const postAllData = async (req: Request, res: Response) => {
  try {
    const { word } = req.body;
    console.log(word);

    const openRouter = new OpenRouter({
      apiKey:
        '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',
    });

    const completion = await openRouter.chat.send({
      model: 'openai/gpt-oss-20b',
      messages: [
        {
          role: 'user',
          content: `When I give you a word, correct its spelling, explain the meaning in English, explain the same meaning in Malayalam, and give 2 example sentences — each English sentence must have the exact same meaning in Malayalam. ${word} `,
        },
      ],
      stream: false,
    });

    let responseText = completion?.choices[0]?.message?.content;
    if (!responseText)
      return res.status(500).json({ message: 'Ai is not responded' });
    const vocabulary = new vocabularModel({
      englishWord: word,
      englishMeaning: completion?.choices[0]?.message?.content,
    });
    await vocabulary.save();
    res
      .status(200)
      .json({ message: 'sucessfully saved', aiResponse: responseText });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
    console.log('The error is comming in postAllData', err);
  }
};
