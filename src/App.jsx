
import './App.css'
import About from './components/About'
import ConnectMe from './components/ConnectMe'
import LearningStack from './components/LearningStack'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Tech from './components/Tech'

function App() {

  return (
    <>
      <Navbar/>
      <Profile/>
      <About/>
      <Tech/>
      <LearningStack/>
      <Projects/>
      <ConnectMe/>
    </>
  )
}

export default App
