import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { context } from '../../../lib/context';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: context,
        },
        { role: 'user', content: message },
      ],
    });

    return NextResponse.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
