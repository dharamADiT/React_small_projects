import { useState } from "react";
import PlayGame from "./component/PlayGame";
import StartGame from "./component/StartGame";
import './index.css'
const App = () => {
  const [isGameStarted, setisGameStarted] = useState(true)

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev)
  }

  return (
    <div>
      {isGameStarted ? <PlayGame /> : <StartGame toggle={toggleGamePlay} />}
   

    </div>
  )
}
export default App