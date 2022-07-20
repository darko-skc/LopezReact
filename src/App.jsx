import './App.css'
import SideBar from './components/Side-bar/Side-bar'
import NavBar from './components/Nav-bar/Nav-bar'
import IndexSection from './containers/Index-Section'

function App() {
  return (
    <div className="App">
      <SideBar />
      <NavBar />
      <IndexSection />
    </div>
  )
}

export default App
