import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import { Route,Routes,BrowserRouter } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='signin' element={<Signin  />}/>
      <Route path='' element={<Signup />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
