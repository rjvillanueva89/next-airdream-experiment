"use server"

import { revalidatePath } from "next/cache"

const API_KEY = process.env.AIRTABLE_API_KEY!
const BASE_ID = process.env.AIRTABLE_BASE_ID!

export const deleteTodo = async (id: string) => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/todos/${id}`
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())

  revalidatePath("/")

  return response
}
