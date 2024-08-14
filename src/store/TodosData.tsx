import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import uuid

export type TodosProvideProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosData = {
  todos: Todo[];
  handleAddToDo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const todosData = createContext<TodosData | null>(null);

export const TodosProvider = ({ children }: TodosProvideProps) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
      console.error("Error reading todos from localStorage:", error);
      return [];
    }
  });

  const handleAddToDo = (task: string) => {
    setTodos(prev => {
      const newTodo: Todo = {
        id: uuidv4(), // Use uuid for unique ID
        task,
        completed: false,
        createdAt: new Date(),
      };
      const newTodos = [newTodo, ...prev];
      try {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      } catch (error) {
        console.error("Error saving todos to localStorage:", error);
      }
      return newTodos;
    });
  };

  const toggleTodoAsCompleted = (id: string) => {
    setTodos(prev => {
      const newTodos = prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      try {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      } catch (error) {
        console.error("Error saving todos to localStorage:", error);
      }
      return newTodos;
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prev => {
      const newTodos = prev.filter(todo => todo.id !== id);
      try {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      } catch (error) {
        console.error("Error saving todos to localStorage:", error);
      }
      return newTodos;
    });
  };

  return (
    <todosData.Provider value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo }}>
      {children}
    </todosData.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(todosData);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};
