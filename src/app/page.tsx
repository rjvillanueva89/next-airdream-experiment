import { getTodos } from "@/actions/get-todos"
import { List } from "@/components/list"
import { TodoForm } from "@/components/todo-form"
import { TodoItem } from "@/components/todo-item"

export default async function HomePage() {
  const todos = await getTodos()

  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <div className="w-96 flex flex-col gap-4 bg-gray-50 p-8 rounded-sm">
        <h1 className="text-2xl">My Todos</h1>
        <TodoForm />
        <List
          items={todos}
          renderItem={(item) => <TodoItem key={item.id} data={item} />}
        />
      </div>
    </div>
  )
}
