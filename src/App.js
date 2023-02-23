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
  }
  return(
    <div className='App'>
      {/* <div className={(mode[0] && manche[0]) ? 'none' : (mode[1] && manche[1]) ? 'none' : (mode[0] && manche[1]) ? 'none' : mode[1] && manche[0] ? 'none' : 'btns'}>
        <h1>Choix du mode de Jeux</h1>
        <button onClick={()=>changeMode(0)} className={mode[0] ? 'btnTrue' : 'btn'}>👱 VS 🖥️</button>
        <br />
        <button onClick={()=>changeMode(1)} className={mode[1] ? 'btnTrue' : 'btn'}>👱 VS 👩‍🦱</button>
        <div className="btnManches">
          <button onClick={()=>changeManche(0)} className={manche[0] ? 'btnMtrue' : 'btnM'}>1️⃣ Manche</button>
          <button onClick={()=>changeManche(1)} className={manche[1] ? 'btnMtrue' : 'btnM'}> 3️⃣ Manches</button>
        </div>
      </div> 
    {mode[0] && manche[0]  ? <JoueurVSOrdi rafraichir={toRefresh}/> : mode[1] && manche[0] ? <JoueurVSOrdi rafraichir={toRefresh}/> : mode[0] && manche[1] ? <Manchex3JoueurVSOrdinateur rafraichir={toRefresh}/> : mode[1] && manche[1] ? <Manchex3JoueurVSJoueur rafraichir={toRefresh}/> : ''}
     */}
     <Manchex3JoueurVSJoueur/>
    </div>
  )
}

export default App