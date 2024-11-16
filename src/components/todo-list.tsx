import { getTodos } from "@/actions/get-todos"
import { List } from "./list"
import { TodoItem } from "./todo-item"

export const TodoList = async () => {
  const todos = await getTodos()

  return (
    <List
      items={todos}
      renderItem={(item) => <TodoItem key={item.id} data={item} />}
    />
  )
}
