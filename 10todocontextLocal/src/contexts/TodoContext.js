import { data } from "autoprefixer"
import React, {createContext, useContext} from "react"

export const TodoContext = createContext({
  todos: [
    {
        id: 1,
        todo: "Todo msg",
        completed: false,
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) =>{},
  deleteTodo : (id) => {},
  toggleComplete : (id) => {}
}
// here in the Context we have stated/talked about what values/propertires are present and what methods are here
)


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

