import { useSearchParams } from "react-router-dom";
import { useTodos } from "../../store/TodosData";

const Todos = () => {
    const {todos, toggleTodoAsCompleted, handleDeleteTodo} = useTodos();
    const [searchParam] = useSearchParams();
    const todosData = searchParam.get("todos");
    
    let filterdData = todos;
    
    if(todosData === "active") {
        filterdData = filterdData.filter((task) => !task.completed);
    }
    
    if(todosData === "completed") {
        filterdData = filterdData.filter((task) => task.completed);
    }
    
    return (
        <ul className="">
            {
                filterdData.map((todo) => {
                    return (
                        <li key={todo.id} className="flex items-start justify-center w-5/6 m-4 gap-8">
                            <input 
                                className="items-start" 
                                type="checkbox" 
                                id={`todo-${todo.id}`}
                                checked={todo.completed}
                                onChange={() => toggleTodoAsCompleted(todo.id)}
                            />
                            <label className="text-xl" htmlFor={`todo-${todo.id}`}>
                                {todo.task}
                            </label>
                            {
                                todo.completed && (
                                    <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                                        Delete
                                    </button>
                                )
                            }
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Todos;
