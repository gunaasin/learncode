
import { Vortex } from "./design/vortex";
export const Home = () => {
  return (
    <div className=" home typewriter">
          <h2 className="  headig">
      Play games. Build <span className="span">skills.</span>
      </h2>
      <div className="ptag">
      <p>
       Level up your coding with games, 
      </p>
      <p>puzzles, and challenges.</p>
   
      </div>
    
    <Vortex
      backgroundColor="black"
      className="ui"
    >
  
      
    </Vortex>
  </div>
  )
}
