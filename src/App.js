import { useState } from "react";
import './App.css'
import JoueurVSOrdi from './component/JoueurVersusOrdinateur/JoueurVersusOrdinateur'
import JoueurVSJoueur from './component/JoueurVersusJoueur/JoueurVersusJoueur'
import Manchex3JoueurVSOrdinateur from './component/Manchex3JvsO/Manchex3JvsO'
import Manchex3JoueurVSJoueur from './component/Manchex3JvsJ/Manchex3JvsJ'

function App() {
//Mode de jeu
  const [mode, setMode] = useState([false, false])
  const changeMode =(index)=>{
    const newMode = [mode[index]]
    newMode[index] = !newMode[index]
    setMode(newMode)
  }

//Nombre de manche(s)
  const [manche, setManche] = useState([false, false])
  const changeManche =(index)=>{
    const newManche = [manche[index]]
    newManche[index] = !newManche[index]
    setManche(newManche) 
  } 
//Bouton Play pour lancer le jeu
  const [play, setPlay] = useState(false)
  const playGame =()=>{
    setPlay(true)
  }
//Bouton Menu dans chaque compenent pour revenir au menu principal 
  let toRefresh=()=>{
    setMode([false, false])
    setManche([false, false])
    setPlay(false)
  }


  return(
    <div className='App'>
      <div className={(mode[0] && manche[0] && play) || (mode[1] && manche[1] && play) || (mode[0] && manche[1] && play) || mode[1] && manche[0] && play? 'none' : 'btns'}>
        <h1>    
          <span>👊</span>
          <span>🖐️</span>
          <span>✌️</span>
        </h1>
  {/* Bouton Mode de Jeu        */}
        <button onClick={()=>changeMode(0)} className={mode[0] ? 'btnTrue' : 'btn'}>👱 VS 🖥️</button>
        <br />
        <button onClick={()=>changeMode(1)} className={mode[1] ? 'btnTrue' : 'btn'}>👱 VS 👩‍🦱</button>
  {/* Bouton choix de manche(s)   */}
        <div className="btnManches">
          <button onClick={()=>changeManche(0)} className={manche[0] ? 'btnMtrue' : 'btnM'}>1️⃣ Manche</button>
          <button onClick={()=>changeManche(1)} className={manche[1] ? 'btnMtrue' : 'btnM'}> 3️⃣ Manches</button>
        </div>
        <button onClick={playGame} className={mode[0] && manche[0] ||  mode[1] && manche[0] || mode[0] && manche[1] || mode[1] && manche[1] ? 'boutonPlay' : 'none'}>PLAY</button>
      </div> 
  {/* Conditions pour afficher le bon compenent en fonctions des choix du joueur  */}
    {mode[0] && manche[0] && play ? <JoueurVSOrdi rafraichir={toRefresh}/> : mode[1] && manche[0] && play ? <JoueurVSJoueur rafraichir={toRefresh}/> : mode[0] && manche[1] && play ? <Manchex3JoueurVSOrdinateur rafraichir={toRefresh}/> : mode[1] && manche[1] && play ? <Manchex3JoueurVSJoueur rafraichir={toRefresh}/> : ''}    
    </div>
  )
}

export default App