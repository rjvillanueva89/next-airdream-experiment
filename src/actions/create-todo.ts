'use server'

import { TodoRecordSchema } from '@/schema'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const API_KEY = process.env.AIRTABLE_API_KEY!
const BASE_ID = process.env.AIRTABLE_BASE_ID!

type FetchResponse = z.infer<typeof TodoRecordSchema>

export const createTodo = async (item: string) => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/todos`
  const response: FetchResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: { item },
    }),
  }).then((res) => res.json())

  revalidatePath('/')

  return response
}
