'use client'

import { createTodoByPipedream } from '@/actions/create-todo-by-pipedream'
import { PlusIcon } from 'lucide-react'
import { useState, useTransition } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export const TodoForm = () => {
  const [value, setValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const handleSubmit = () => {
    startTransition(async () => {
      await createTodoByPipedream(value)
      setValue('')
    })
  }

  return (
    <div className="flex items-center gap-4">
      <Input
        placeholder="Add todo item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleSubmit} disabled={!value || isPending}>
        <PlusIcon />
      </Button>
    </div>
  )
}
