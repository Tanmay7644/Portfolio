import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Front from './Components/Front.jsx'
import About from './Components/About.jsx'
function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Front/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
