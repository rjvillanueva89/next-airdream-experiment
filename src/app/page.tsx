import { TodoList } from "@/components/todo-list"

export default async function HomePage() {
  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <div className="w-96">
        <h1 className="text-2xl mb-4">My Todos</h1>
        <TodoList />
      </div>
    </div>
  )
}
