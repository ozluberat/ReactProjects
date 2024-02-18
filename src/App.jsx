import { useState } from "react"
import "./App.css"
import Navbar from "./Components/Navbar/Navbar.jsx"
import NewsBoard from "./Components/NewsBoard.jsx"
import Footer from "./Components/Footer/Footer.jsx"

const App = () => {
  const [category , setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <Footer/>
    </div>
  )
}

export default App
