import {createSlice, nanoid } from '@reduxjs/toolkit'
// nanoid : named method is provided to us by redux toolkit which generates unique ids. (Remember how we made unique ids through Date.now() in context Api's)

const initialState = {
    todos:[{
        id:1, text: "Hello World"
    }]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: ( state, action) => {
            const todo = {
                id: nanoid() ,
                text: action.payload
             }
             state.todos.push(todo)
             //payload is an object
        },
        removeTodo: (state, action) => {
           state.todos = state.todos.filter((todo) => todo.id !== action.payload)   
        },
        
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ?  action.payload: todo)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer