import { useContext ,createContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false,
        }
    ],

    addTodo: (todo)=>{todo},
    updateTodo: (id,todo)=>{id,todo},
    deleteTodo: (id)=>{id},
    toggleComplete: (id)=>{id},
});

export const useTodo=()=>{
    return useContext(TodoContext);
}


export const Todoprovider=TodoContext.Provider