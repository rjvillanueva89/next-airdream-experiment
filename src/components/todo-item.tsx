'use client'

import { deleteTodo } from '@/actions/delete-todo'
import { updateTodo } from '@/actions/update-todo'
import { cn } from '@/lib/utils'
import { TodoRecordSchema } from '@/schema'
import { Square, SquareCheck, Trash } from 'lucide-react'
import { useTransition } from 'react'
import { z } from 'zod'

type TodoRecord = z.infer<typeof TodoRecordSchema>

interface Props {
  data: TodoRecord
}

export const TodoItem = ({ data: { id, fields } }: Props) => {
  const { item, completed } = fields
  const [isPending, startTransition] = useTransition()

  const handleComplete = () => {
    startTransition(async () => {
      await updateTodo(id, { completed: !completed })
    })
  }

  const handleDelete = () => {
    startTransition(async () => {
      await deleteTodo(id)
    })
  }

  return (
    <div
      className={cn(
        'flex items-center gap-4',
        isPending && 'opacity-25 pointer-events-none'
      )}
    >
      <button type="button" onClick={handleComplete}>
        {completed ? (
          <SquareCheck className="size-5" />
        ) : (
          <Square className="size-5" />
        )}
      </button>
      <p className={cn('grow', !completed || 'line-through')}>{item}</p>
      <button type="button" onClick={handleDelete}>
        <Trash className="size-5" />
      </button>
    </div>
  )
}
