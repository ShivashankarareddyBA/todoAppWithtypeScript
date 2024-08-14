import Form from "./components/form/Form"
import Navbar from "./components/navItem/Navbar"
import Todos from "./components/todo/Todos"

const App = () => {
  return (
    <main>
      <h1 className="  my-10 text-3xl text-green-600 text-center"> 
        To-Do-App with Type - Script
        </h1>
        <Navbar/>
        <Form/>
        <Todos/>
    </main>
  )
}

export default App
