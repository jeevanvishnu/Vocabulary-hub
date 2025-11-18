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
    if (!word) return res.status(400).json({ message: 'Word is missing' });
    console.log(word);

    const apiKey = process.env.OPEN_ROUTER_API

    let response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b:free',
          messages: [
            {
              role: 'user',
              content: `You are a vocabulary teaching assistant.

                When I give you a word, do the following:

                1. Correct the spelling if needed.
                2. Give the English meaning (short and clear).
                3. Give the Malayalam meaning.
                4. Give exactly 2 example sentences:
                  - Each English sentence must have the exact same meaning translated into Malayalam.

                Format the output like this:

                English Meaning:
                <meaning>

                Malayalam Meaning:
                <meaning>

                Examples:
                1. English: <sentence>
                  Malayalam: <sentence>

                2. English: <sentence>
                  Malayalam: <sentence>

                The word is: ${word}
                `,
            },
          ],
          
        }),
      }
    );

    const result = await response.json();
    const aiResponse = result?.choices[0]?.message?.content;
    
    

    if (!aiResponse)
      return res.status(404).json({ messaage: 'Ai Response is found' });

    const vocabulary = new vocabularModel({
      englishWord: word,
      englishMeaning: aiResponse,
    });

    await vocabulary.save();
    res.status(201).json({message:"Sucessfully saved",Response:aiResponse})

  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
    console.log('The error is comming in postAllData', err);
  }
};


