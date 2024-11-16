"use client"

import { updateTodo } from "@/actions/update-todo"
import { cn } from "@/lib/utils"
import { Square, SquareCheck, Trash } from "lucide-react"

interface Props {
  data: Records<Todo>
}

export const TodoItem = ({ data: { id, fields } }: Props) => {
  const { item, completed } = fields

  const handleComplete = async () => {
    await updateTodo(id, { completed: !completed })
  }

  return (
    <div className="flex items-center gap-4">
      <button type="button" onClick={handleComplete}>
        {completed ? (
          <SquareCheck className="size-5" />
        ) : (
          <Square className="size-5" />
        )}
      </button>
      <p className={cn("grow", !completed || "line-through")}>{item}</p>
      <button type="button">
        <Trash className="size-5" />
      </button>
    </div>
  )
}
