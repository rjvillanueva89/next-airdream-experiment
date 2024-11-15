"use server"

const API_KEY = process.env.AIRTABLE_API_KEY!
const BASE_ID = process.env.AIRTABLE_BASE_ID!

type ResponseData = Records<Todo>

export const createTodo = async (item: string) => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/todos`
  const response: ResponseData = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: { item },
    }),
  }).then((res) => res.json())

  return response
}
