import { useState, useEffect } from 'react'
import './Version1.css' //import du style CSS

function Version1() {
    let tab = [1, 2, 3]
//Etat pour chacun des objets
    const [randomTab, setRandomTab] = useState(null)
    const [pierre, setPierre] = useState(false)
    const [papier, setPapier] = useState(false)
    const [ciseau, setCiseau] = useState(false)
    const changePierre =()=>{
        setPierre(true)
        setCiseau(false)
        setPapier(false) 
        setRandomTab(tab[Math.floor(Math.random()*tab.length)])
        console.log(randomTab);

    }
    const changePapier =()=>{
        setPapier(true)
        setPierre(false)
        setCiseau(false)
        setRandomTab(tab[Math.floor(Math.random()*tab.length)])

    }
    const changeCiseau=()=>{
        setCiseau(true)
        setPierre(false)
        setPapier(false)
        setRandomTab(tab[Math.floor(Math.random()*tab.length)])
        console.log(randomTab);
    }
    const rafraichir =()=>{
        window.location.reload()
    }
//Conditions qui vérifient la carte du joueur et celle de l'ordinateur
    if ((papier == true && randomTab == 2) || (papier == true && randomTab == 3) || (pierre==true && randomTab==1) ) {
        setTimeout(() => {
            alert('Egalité')
        }, 700);
    }
    if ((pierre == true && randomTab == 3) || (papier == true && randomTab == 1) || (ciseau == true && randomTab == 2)){
        setTimeout(() => {
            alert ('Tu as gagné cette manche')
        }, 700);
    }
    if ((randomTab == 1 && ciseau == true) || (randomTab==2 && pierre == true) || (randomTab == 3 && papier == true)) {
        setTimeout(() => {
        alert('Tu as perdu')
        }, 700);
    }


    return(
        <section className='sec1'>
{/* Choix random par l'ordinateur */}
            <div className='cards'>
                <div className='p'>
                    <p>Ordinateur</p>
                </div>
                <div className='flex'>                
                    <div className={randomTab == 1 ? 'cardOrdinateur' : 'card1'}>
                        <span>👊</span>
                    </div>
                    <div className={randomTab == 2 ? 'cardOrdinateur' : 'card1'}>
                        <span>🖐️</span>
                    </div>
                    <div className={randomTab == 3 ? 'cardOrdinateur' : 'card1'}>
                        <span>✌️</span>
                    </div>
                </div>
            </div>

{/* Choix du joueur */}
            <div className='cards'>
                <div className='p'>
                    <p>Joueur</p>
                </div>
                <div className='flex'>                
                    <div onClick={changePierre} className={pierre ? 'cardBlack' : 'card'}>
                        <span>👊</span>
                    </div>
                    <div onClick={changePapier} className={papier ? 'cardBlack' : 'card'}>
                        <span>🖐️</span>
                    </div>
                    <div onClick={changeCiseau} className={ciseau ? 'cardBlack' : 'card'}>
                        <span>✌️</span>
                    </div>
                </div>
                <button onClick={rafraichir}>Rejouer</button>
            </div>
        </section>
    )
}

export default Version1
