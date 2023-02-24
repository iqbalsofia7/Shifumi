import { useState, useEffect } from 'react'
import './JoueurVersusOrdinateur.css' //import du style CSS

//Joueur VS Ordinateur (une manche)
function MaFonction2(props) {
    //Tableau pour associer chacun des chiffre à une carte
    let tab = [0, 1, 2]
    const [randomTab, setRandomTab] = useState(null)
    const [choix, setChoix] = useState([false, false, false])
    const [score, setScore] = useState(0)
    const [scoreO, setScoreO] = useState(0)
    const changerChoix =(index)=>{
        const newChoix = [...choix]
        newChoix[index] = !newChoix[index]
        setChoix(newChoix)
        setRandomTab(tab[Math.floor(Math.random()*tab.length)])
        console.log(randomTab);
    }
//Conditions qui vérifient la carte du joueur et celle de l'ordinateur
    useEffect(() => {
        if ((choix[1] == true && randomTab == 1) || (choix[2] == true && randomTab == 2) || (choix[0]==true && randomTab==0) ) {
            setTimeout(() => {
                alert('Egalité')
                setChoix([false, false, false])
                setRandomTab(null)
            }, 700);
        }
        if ((choix[0] == true && randomTab == 2) || (choix[1] == true && randomTab == 0) || (choix[2] == true && randomTab == 1)){
            setTimeout(() => {
                alert ('Tu as remporté la partie')
                setChoix([false, false, false])
                setRandomTab(null)
                setScore(1)
            }, 700);
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }
        if ((randomTab == 1 && choix[0] == true) || (randomTab==2 && choix[1] == true) || (randomTab == 0 && choix[2] == true)) {
            setTimeout(() => {
            alert('Tu as perdu')
            setScoreO(1)
            setChoix([false, false, false])
            setRandomTab(null)
            }, 700);
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }
    }, [randomTab, choix])

    return(
        <section className='sec1'>
{/* Choix random */}
            <div className='cards'>
                <div className='p'>
                    <p>Ordinateur : {scoreO}</p>
                </div>
                <div className='flex'>                
                    <div className={randomTab == 0 ? 'cardOrdinateur' : 'card1'}>
                        <span>👊</span>
                    </div>
                    <div className={randomTab == 1 ? 'cardOrdinateur' : 'card1'}>
                        <span>🖐️</span>
                    </div>
                    <div className={randomTab == 2 ? 'cardOrdinateur' : 'card1'}>
                        <span>✌️</span>
                    </div>
                </div>
            </div>

{/* Choix du joueur */}
            <div className='cards'>
                <div className='p'>
                    <p>Joueur : {score}</p>
                </div>
                <div className='flex'>                
                    <div onClick={()=>changerChoix(0)} className={choix[0] ? 'cardBlack' : 'card'}>
                        <span>👊</span>
                    </div>
                    <div onClick={()=>changerChoix(1)} className={choix[1] ? 'cardBlack' : 'card'}>
                        <span>🖐️</span>
                    </div>
                    <div onClick={()=>changerChoix(2)} className={choix[2] ? 'cardBlack' : 'card'}>
                        <span>✌️</span>
                    </div>
                </div>
                <button className='menu' onClick={props.rafraichir}>Menu</button>
            </div>
        </section>
    )
}


export default MaFonction2
