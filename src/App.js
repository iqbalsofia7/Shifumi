import { useState } from "react";
import './App.css'
import Version1 from './component/Version1/Version1'
import JoueurVSOrdi from './component/JoueurVersusOrdinateur/JoueurVersusOrdinateur'
import JoueurVSJoueur from './component/JoueurVersusJoueur/JoueurVersusJoueur'
function App() {
  const [mode, setMode] = useState([false, false])
  const changeMode =(index)=>{
    const newMode = [...mode]
    newMode[index] = !newMode[index]
    setMode(newMode)
  }
  let toRefresh=()=>{
    setMode([false, false])
  }
  return(
    <div className='App'>
      <div className={mode[0] == true ? 'none' : mode[1] == true ? 'none' : 'btns'}>
        <h1>Choix du mode de Jeux</h1>
      <button onClick={()=>changeMode(0)} className="btn">👱 VS 🖥️</button>
      <br />
      <button onClick={()=>changeMode(1)} className="btn">👱 VS👱</button>
      </div> 

    {mode[0] == true ? <JoueurVSOrdi rafraichir={toRefresh}/> : mode[1] == true ? <JoueurVSJoueur rafraichir={toRefresh}/>  : null}
    {/* {mode[1] == true ? <JoueurVSJoueur/>  : null} */}

    </div>
  )
}

export default App