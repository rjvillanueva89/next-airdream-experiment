import { z } from 'zod'

export const TodoSchema = z.object({
  record_id: z.string(),
  item: z.string(),
  completed: z.boolean().optional(),
})

export const TodoRecordSchema = z.object({
  id: z.string(),
  fields: TodoSchema,
  createdTime: z.string(),
})
