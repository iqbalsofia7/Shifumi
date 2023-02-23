import { useState } from "react";
import './App.css'
import Version1 from './component/Version1/Version1'
import JoueurVSOrdi from './component/JoueurVersusOrdinateur/JoueurVersusOrdinateur'
import JoueurVSJoueur from './component/JoueurVersusJoueur/JoueurVersusJoueur'
import Manchex3JoueurVSOrdinateur from './component/Manchex3JvsO/Manchex3JvsO'
import Manchex3JoueurVSJoueur from './component/Manchex3JvsJ/Manchex3JvsJ'
function App() {
  const [mode, setMode] = useState([false, false])
  const [manche, setManche] = useState([false, false])
  const [play, setPlay] = useState(false)
  const changeMode =(index)=>{
    const newMode = [mode[index]]
    newMode[index] = !newMode[index]
    setMode(newMode)
  }
  const changeManche =(index)=>{
    const newManche = [manche[index]]
    newManche[index] = !newManche[index]
    setManche(newManche) 

  }
  let toRefresh=()=>{
    setMode([false, false])
    setManche([false, false])
    setPlay(false)
  }
  const playGame =()=>{
    setPlay(true)
  }

  return(
    <div className='App'>
      <div className={(mode[0] && manche[0] && play) ? 'none' : (mode[1] && manche[1] && play) ? 'none' : (mode[0] && manche[1] && play) ? 'none' : mode[1] && manche[0] && play? 'none' : 'btns'}>
        <h1>    
          <span>👊</span>
          <span>🖐️</span>
          <span>✌️</span>
        </h1>
        <button onClick={()=>changeMode(0)} className={mode[0] ? 'btnTrue' : 'btn'}>👱 VS 🖥️</button>
        <br />
        <button onClick={()=>changeMode(1)} className={mode[1] ? 'btnTrue' : 'btn'}>👱 VS 👩‍🦱</button>
        <div className="btnManches">
          <button onClick={()=>changeManche(0)} className={manche[0] ? 'btnMtrue' : 'btnM'}>1️⃣ Manche</button>
          <button onClick={()=>changeManche(1)} className={manche[1] ? 'btnMtrue' : 'btnM'}> 3️⃣ Manches</button>
        </div>
        <button onClick={playGame} className={mode[0] && manche[0] ? 'boutonPlay' : mode[1] && manche[0] ? 'boutonPlay' : mode[0] && manche[1] ? 'boutonPlay' : mode[1] && manche[1] ? 'boutonPlay' : 'none'}
 >PLAY</button>
      </div> 
    {mode[0] && manche[0] && play ? <JoueurVSOrdi rafraichir={toRefresh}/> : mode[1] && manche[0] && play ? <JoueurVSJoueur rafraichir={toRefresh}/> : mode[0] && manche[1] && play ? <Manchex3JoueurVSOrdinateur rafraichir={toRefresh}/> : mode[1] && manche[1] && play ? <Manchex3JoueurVSJoueur rafraichir={toRefresh}/> : ''}
    
     {/* <Manchex3JoueurVSJoueur/> */}
    </div>
  )
}

export default App