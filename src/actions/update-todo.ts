'use server'

import { TodoRecordSchema, TodoSchema } from '@/schema'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const API_KEY = process.env.AIRTABLE_API_KEY!
const BASE_ID = process.env.AIRTABLE_BASE_ID!

type FetchResponse = z.infer<typeof TodoRecordSchema>
type Todo = z.infer<typeof TodoSchema>

export const updateTodo = async (id: string, fields: Partial<Todo>) => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/todos/${id}`
  const response: FetchResponse = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
  }).then((res) => res.json())

  revalidatePath('/')

  return response
}
