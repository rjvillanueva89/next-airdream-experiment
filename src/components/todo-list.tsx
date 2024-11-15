import { getTodos } from "@/app/actions/get-todos"
import { cn } from "@/lib/utils"
import { Square, SquareCheck, Trash } from "lucide-react"
import { List } from "./list"

export const TodoList = async () => {
  const todos = await getTodos()

  return (
    <List
      items={todos}
      renderItem={(item) => <Item key={item.id} data={item} />}
    />
  )
}

interface ItemProps {
  data: Records<Todo>
}

const Item = ({ data }: ItemProps) => {
  const { item, completed } = data.fields

  return (
    <div className="flex items-center gap-4">
      <button type="button">
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
