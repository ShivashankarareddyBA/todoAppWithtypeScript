import { useSearchParams } from "react-router-dom";
import { useTodos } from "../../store/TodosData";

const Todos = () => {
    const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
    const [searchParam] = useSearchParams();
    const todosData = searchParam.get("todos");

    let filteredData = todos;

    if (todosData === "active") {
        filteredData = filteredData.filter((task) => !task.completed);
    } else if (todosData === "completed") {
        filteredData = filteredData.filter((task) => task.completed);
    }

    return (
        <ul className="flex flex-col items-center">
            {filteredData.length > 0 ? (
                filteredData.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between 
                    w-[394px] sm:w-[690px] p-2 m-1  border rounded-lg bg-gray-100 gap-4">
                        <div className="flex items-center">
                            <input
                                className="mr-4"
                                type="checkbox"
                                id={`todo-${todo.id}`}
                                checked={todo.completed}
                                onChange={() => toggleTodoAsCompleted(todo.id)}
                                aria-label={`Mark ${todo.task} as ${todo.completed ? 'incomplete' : 'complete'}`}
                            />
                            <label className="text-xl" htmlFor={`todo-${todo.id}`}>
                                {todo.task}
                            </label>
                        </div>
                        {todo.completed && (
                            <button
                                className="rounded-lg bg-red-500 text-white text-xl px-1 py-1"
                                type="button"
                                onClick={() => handleDeleteTodo(todo.id)}
                                aria-label={`Delete ${todo.task}`}
                            >
                                Delete
                            </button>
                        )}
                    </li>
                ))
            ) : (
                <p className="text-xl mt-4">No tasks found.</p>
            )}
        </ul>
    );
};

export default Todos;
