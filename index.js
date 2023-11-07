import 'dotenv/config'

import OpenAI from 'openai'

const openai = new OpenAI()

const results = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: 'system',
      content:
        'You are an AI assistant, answer any questions to the best of your ability',
    },
    {
      role: 'user',
      content:
        'Hi! Can you tell me the best way to start learning AWS services?',
    },
  ],
})

console.log(results.choices[0].message)
