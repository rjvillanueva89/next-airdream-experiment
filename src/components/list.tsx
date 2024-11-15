import { ReactNode } from "react"

interface Props<T> {
  items: T[]
  renderItem: (data: T) => ReactNode
}

export const List = <T,>({ items, renderItem }: Props<T>) => {
  if (!items.length) return <EmptyAlert />

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => renderItem(item))}
    </div>
  )
}

const EmptyAlert = () => (
  <div className="flex items-center justify-center">List is empty.</div>
)
