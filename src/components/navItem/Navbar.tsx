import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex flex-wrap justify-center sm:gap-40 gap-4 w-7/6"
      role="navigation"
    >
      <Link
        to="/?todos=all"
        className="rounded-lg bg-green-800 text-xl w-30 p-2 text-white
         hover:bg-green-700 focus:outline-none focus:ring-2
          focus:ring-green-500 focus:ring-opacity-50"
      >
        All Tasks
      </Link>
      <Link
        to="/?todos=active"
        className="rounded-lg bg-green-500 text-xl w-30 p-2 text-white
         hover:bg-green-300 focus:outline-none focus:ring-2
          focus:ring-green-500 focus:ring-opacity-50"
      >
        Active Tasks
      </Link>
      <Link
        to="/?todos=completed"
        className="rounded-lg bg-orange-500 text-xl w-30 p-2 text-white
         hover:bg-orange-700 focus:outline-none focus:ring-2
          focus:ring-orange-300 focus:ring-opacity-50"
      >
        Completed Tasks
      </Link>
    </nav>
  );
};

export default Navbar;
