import UserOptions from "./components/UserOptions/UserOptions"
import Sidebar from "./layouts/Sidebar"
import About from "./layouts/sections/About"
import Experience from "./layouts/sections/Experience"
import Projects from "./layouts/sections/Projects"
import Techs from "./layouts/sections/Techs"

function App() {

  return (
    <div className="app">
      <div className="container">
      <UserOptions />
      <Sidebar />
      <div className="main md:ml-96">
        <About />
        <Experience />
        <Projects />
        <Techs />
      </div>
      </div>
    </div>
  )
}

export default App
