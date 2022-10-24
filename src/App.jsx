import './App.css'
import Display from "./Display"
import {Routes,Route} from "react-router-dom"

export default function App() {
  return (
  <Routes>
  
    <Route exact path="/" element={<Display/>}/>
    <Route exact path ="*" element ={<h1>404 ... not found !</h1>} />
  </Routes>
    
  )
}
