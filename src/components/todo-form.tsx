"use client"

import { createTodo } from "@/actions/create-todo"
import { PlusIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const TodoForm = () => {
  const [value, setValue] = useState("")
  const handleSubmit = async () => {
    await createTodo(value)
    setValue("")
  }
  return (
    <div className="flex items-center gap-4">
      <Input
        placeholder="Add todo item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleSubmit}>
        <PlusIcon />
      </Button>
    </div>
  )
}
