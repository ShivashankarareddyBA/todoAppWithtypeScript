import { createContext, ReactNode, useContext, useState } from "react";

//createContext store what ever the data

// to provide the date or distibute data

// provider();

// to utilize the data will use consumer
// consumer => useContext
export type TodosProvideProps = {
  children: ReactNode;
};

export type Todo ={
  id:string;
  task:string;
  completed:boolean;
  createdAt: Date;
}
export type TodosData ={
    todos: Todo[];
    handleAddToDo:(task:string) => void;
    toggleTodoAsCompleted:(id:string) => void;
    handleDeleteTodo:(id:string) => void;
}

export const todosData = createContext<TodosData | null>(null);

export const TodosProvider = ({ children }: TodosProvideProps) => {

  const [todos, setTodos] = useState<Todo[]>([])
const handleAddToDo=(task:string)=>{
  
setTodos((prev)=>{
const newTodos: Todo[] = [{
id: Math.random().toString(),
task:  task,
completed:false,
createdAt: new Date(),
},
... prev]
console.log(newTodos)
return newTodos;

})


}
 const toggleTodoAsCompleted =(id: string) =>{
  setTodos((prev)=>{
    const  newTodo = prev.map((todo)=>{

      if (todo.id=== id){
       return {...todo , completed:!todo.completed}
      }
    //   setTodos((prevTodos) => 
    //     prevTodos.map(todo => 
    //         todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //     )
    // );
      return todo
    })
    return newTodo
  })
 }
 const handleDeleteTodo = (id: string) => {
  setTodos((prev) => {
    // Use the filter method to remove the todo with the matching id
    const newTodos = prev.filter((todo) => todo.id !== id);
    return newTodos;
  });
};



  return <todosData.Provider value={{todos,handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo}}>
    {children}
    </todosData.Provider>;
};


export const useTodos = () =>{
 const consumer = useContext(todosData);
 if (!consumer){
  throw new Error("use Todos outside of provider ");
 }
 return consumer;
}