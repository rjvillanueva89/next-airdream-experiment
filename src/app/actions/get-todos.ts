"use server"

const API_KEY = process.env.AIRTABLE_API_KEY!
const BASE_ID = process.env.AIRTABLE_BASE_ID!

type ResponseData = {
  records: Records<Todo>[]
}

export const getTodos = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/todos?sort[0][field]=completed&sort[0][direction]=desc`
  const response: ResponseData = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())

  return response.records
}
