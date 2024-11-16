"use server"

import { revalidatePath } from "next/cache"

export const createTodoByPipedream = async (item: string) => {
  const url = `https://eop8l19cn4l3cr8.m.pipedream.net/?item=${item}`

  await fetch(url)

  revalidatePath("/")
}
