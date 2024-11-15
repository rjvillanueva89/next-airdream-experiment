type Records<T> = {
  id: string
  fields: T
  createdTime: Date
}

type Todo = {
  item: string
  completed?: boolean
}
