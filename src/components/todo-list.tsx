import { getTodos } from "@/app/actions/get-todos"
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
      <input type="checkbox" checked={!!completed} />
      <p>{item}</p>
    </div>
  )
}
