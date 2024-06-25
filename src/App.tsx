import UserOptions from "./components/UserOptions/UserOptions"
import Sidebar from "./layouts/Sidebar"
import About from "./layouts/sections/About"
import Experience from "./layouts/sections/Experience"
import Projects from "./layouts/sections/Projects"
import Techs from "./layouts/sections/Techs"

function App() {

  return (
    <div className="app">
      <UserOptions />
      <Sidebar />
      <div className="main ml-80">
        <About />
        <Experience />
        <Projects />
        <Techs />
      </div>
    </div>
  )
}

export default App
