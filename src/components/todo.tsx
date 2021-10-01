import React, { useContext } from "react"
import { observer } from "mobx-react-lite"

import TodoStore from "../stores/TodoStore"
import TodoList from './TodoList'
import Footer from './Footer'

export const TodoApp = observer(() => {
  const store = useContext(TodoStore)
  return (
    <div className="App">
      <h2>A Todo App yet again!</h2>

      <TodoList
        todos={store.todos}
        toggleTodo={store.toggleTodo}
      />

      <Footer
        remaining={store.remainingTodos}
        total={store.todos.length}
      />
    </div>
  )
})
