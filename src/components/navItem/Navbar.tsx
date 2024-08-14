import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      // <div>
      //   <div className=" flex flex-wrap justify-center sm:gap-40 gap-4">
      //     <div className=" rounded-lg bg-teal-400">
      //       <button className="text-xl w-32">All-Task</button>
      //     </div>
      //     <div className=" rounded-lg bg-green-400">
      //       <button className="text-xl w-36">Active-Task</button>
      //     </div>
      //     <div className=" rounded-lg bg-orange-400">
      //       <button className="text-xl w-40">Completed-Task</button>
      //     </div>
      //   </div>
      // </div>
      <nav className="flex flex-wrap justify-center sm:gap-40 gap-4">
            <Link to="/?todos=all" className="rounded-lg text-xl text-center w-32 bg-teal-400">All-Task</Link>
            <Link to="/?todos=active" className="rounded-lg text-center text-xl w-36 bg-green-400">Active-Task</Link>
            <Link to="/?todos=completed" className="rounded-lg text-center text-xl w-40 bg-orange-400">Completed-Task</Link>
        </nav>
    );
  };
  
  export default Navbar;
  