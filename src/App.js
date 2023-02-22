import { useState } from "react";
import Jeux from './component/Version1/Version1'
import './App.css'
import Version1 from './component/Version1/Version1'
import JoueurVSOrdi from './component/JoueurVersusOrdinateur/JoueurVersusOrdinateur'
function App() {

  return(
    <div className="App">
      {/* <Version1 /> */}
      <JoueurVSOrdi/>
    </div>
  )
}

export default App