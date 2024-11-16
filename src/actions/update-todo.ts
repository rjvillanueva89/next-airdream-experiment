"use server"

import { revalidatePath } from "next/cache"

const API_KEY = process.env.AIRTABLE_API_KEY!
const BASE_ID = process.env.AIRTABLE_BASE_ID!

type ResponseData = Records<Todo>

export const updateTodo = async (id: string, fields: Partial<Todo>) => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/todos/${id}`
  const response: ResponseData = await fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields }),
  }).then((res) => res.json())

  revalidatePath("/")

  return response
}
