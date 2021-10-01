import { createContext } from "react"
import { action, computed, makeObservable, observable } from "mobx"

export class Todos {
  constructor() {
    makeObservable(this, {
      todos: observable,
      remainingTodos: computed,
      toggleTodo: action,
    })
  }
  todos = [
    { id: 1, text: "Buy eggs", completed: true },
    { id: 2, text: "Write a post", completed: false },
    { id: 3, text: "Write another post", completed: false },
    { id: 4, text: "add a task", completed: false },
  ]

  get remainingTodos() {
    return this.todos.filter((t) => !t.completed).length
  }

  toggleTodo = (index) => {
    this.todos[index].completed = !this.todos[index].completed
  }
}

export default createContext(new Todos())
