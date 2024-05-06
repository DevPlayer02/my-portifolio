import './index.css'
import AboutMe from './componentes/pages/AboutMe/AboutMe'
import Footer from './componentes/pages/Footer/Footer'
import Navbar from './componentes/pages/Navbar/Navbar'
import Presentation from './componentes/pages/Presentation/Presentation'
import Projects from './componentes/pages/Projects/Projects'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App
