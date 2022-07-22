import { lazy, Suspense } from 'react'
import './App.css'
import SideBar from './components/Side-bar/Side-bar'
import NavBar from './components/Nav-bar/Nav-bar'
import IndexSection from './containers/Index-Section'
import { Routes, Route, Navigate} from 'react-router-dom'

const DetailCard = lazy(() => import('./components/Detail-card/Detail-card'))

function App() {
  return (
    <div className="App">
      <SideBar />
      <NavBar />
      <Routes>
        <Route index path='/' element={<IndexSection />}/>
        <Route path='/detail/:productID' element={
          <Suspense fallback={<div>Cargando....</div>}>
            <DetailCard />
            
          </Suspense>
        }/>  
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  )
}

export default App
