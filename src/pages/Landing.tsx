
import { Fotter } from "../component/Fotter"
import { Home } from "../component/Home"
import { Links } from "../component/Links"
import { Navbar } from "../component/Navbar"
import { Progras } from "../component/Progras"
import "../App.css"

export const Landing = () => {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <Links/>
      <Progras/>
     <Fotter/>
    </div>
  )
}



