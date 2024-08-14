import { FormEvent, useState } from "react";
import { useTodos } from "../../store/TodosData";

const Form = () => {
  const [toDo, setToDo] = useState("");
  const { handleAddToDo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (toDo.trim() === "") {
      // Optionally, display an error message or shake the input box to indicate an issue
      return;
    }

    handleAddToDo(toDo.trim());
    setToDo("");
  };

  return (
    <form
      className="gap-1 mt-4 flex flex-wrap  justify-center sm:gap-1"
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="todo-input" className="sr-only">
        Write your Todo here
      </label>
      <input
        id="todo-input"
        className="mr-0 border border-gray-400 w-[278px] sm:w-[578px] p-2"
        placeholder="Write your Todo here"
        type="text"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button
        className="rounded-lg bg-green-800 text-xl w-28 text-white
         hover:bg-green-700 focus:outline-none focus:ring-2
          focus:ring-green-500 focus:ring-opacity-50"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default Form;
