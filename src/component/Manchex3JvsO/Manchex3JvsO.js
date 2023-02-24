import { useState, useEffect } from 'react'
import './Manchex3JvsO.css'

// Joueur Versus Ordinateur en 3 Manches :
function MaFonction2(props) {

//Conditions qui vérifient la carte du joueur et celle de l'ordinateur
    let tab = [0, 1, 2]
    const [randomTab, setRandomTab] = useState(null)
    const [choix, setChoix] = useState([false, false, false])
    const changerChoix =(index)=>{
        const newChoix = [...choix]
        newChoix[index] = !newChoix[index]
        setChoix(newChoix)
        setRandomTab(tab[Math.floor(Math.random()*tab.length)])
        console.log(randomTab);
    }
    useEffect(() => {
        if ((choix[1] == true && randomTab == 1) || (choix[2] == true && randomTab == 2) || (choix[0]==true && randomTab==0) ) {
            setTimeout(() => {
                alert('Egalité')
                setRandomTab(null)
                setChoix([false, false, false])
            }, 700);
            
        }
        if ((choix[0] == true && randomTab == 2) || (choix[1] == true && randomTab == 0) || (choix[2] == true && randomTab == 1)){
            setTimeout(() => {
                alert ('Tu remportes 1 point')
                setRandomTab(null)
                setChoix([false, false, false])
                setScoreJ((prev)=> prev + 1)
            }, 700);
        }
        if ((randomTab == 1 && choix[0] == true) || (randomTab==2 && choix[1] == true) || (randomTab == 0 && choix[2] == true)) {
            setTimeout(() => {
            alert("L'ordinateur remporte un point")
            setRandomTab(null)
            setChoix([false, false, false])
            setScore0((prev)=> prev + 1)
            }, 700);
        }
    }, [randomTab, choix])

    const playAgain =()=>{
        setTimeout(() => {
        setScore0(0)
        setScoreJ(0)
        setChoix([false, false, false])
        }, 2000);
    }

//Conditions qui vérifient le score de l'ordinateur et du joueur
const [scoreJ, setScoreJ] = useState(0)
const [scoreO, setScore0] = useState(0)
    useEffect(() => {
        if (scoreO == 3) {
            alert("L'ordinateur a remporté la partie")
        }
        if (scoreJ == 3) {
            alert('Tu as remporté la partie')
        }
    }, [randomTab, choix])

    return(
        <section className='sec1'>
{/* Choix random */}
            <div className='cards'>
                <div className='p'>
                    <p>Ordinateur : {scoreO}/3</p>
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
                    <p>Joueur : {scoreJ}/3</p>
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
                <div className={scoreJ == 3 || scoreO == 3 ? 'rejouer' : 'none'}>
                    <button className='rejouerButton' onClick={playAgain}>Rejouer</button>
                </div>
                <button className='menu' onClick={props.rafraichir}>Menu</button>
            </div>
        </section>
    )
}

export default MaFonction2
