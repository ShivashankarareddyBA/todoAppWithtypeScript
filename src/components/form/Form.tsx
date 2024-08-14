import { FormEvent, useState } from "react";
import { useTodos } from "../../store/TodosData";

const Form = () => {
    const [toDo, setToDo] = useState("");
    const {handleAddToDo} = useTodos();


    const handleFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleAddToDo(toDo);
        setToDo("");

    }
    return (
      <form className="gap-1 mt-4 flex flex-wrap justify-center sm:gap-1"
      onSubmit={handleFormSubmit}>
        <input
          className="mr-0 border border-gray-400 w-3/5 sm:w-[600px]"
          placeholder="Write your Todo here"
          type="text" value={toDo} onChange={(e)=>setToDo(e.target.value)}
          
        />
        <button className="rounded-lg bg-green-800 text-xl w-32"
        type="submit">
          Add Task
        </button>
      </form>
    );
  };
  
  export default Form;
  