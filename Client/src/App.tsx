import './App.css'
import Login from './components/Login/Login'
import { Route} from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Register from './components/Register/Register'

function App() {


  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
