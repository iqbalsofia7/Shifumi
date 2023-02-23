import { useState, useEffect } from 'react'
import './Manchex3JvsJ.css' //import du style CSS
//Joueur VERSUS Joueur en 3 manches
function Manchex3JoueurVersusJoueur(props) {
//Joueur 1
    const [choix2, setChoix2] = useState([false, false, false])
    const [scoreJ2, setScoreJ2] = useState(0)
    const changerChoix2 =(index2)=>{
        const newChoix2 = [...choix2]
        newChoix2[index2] = !newChoix2[index2]
        setChoix2(newChoix2)
    }

//Joueur 2
    const [choix, setChoix] = useState([false, false, false])
    const [scoreJ1, setScoreJ1] = useState(0)
    const changerChoix =(index)=>{
        const newChoix = [...choix]
        newChoix[index] = !newChoix[index]
        setChoix(newChoix)
    }

//Conditions qui vérifient la carte du joueur et celle de l'ordinateur
    useEffect(() => {
        if ((choix[1] == true && choix2[1] == true ) || (choix[2] == true && choix2[2] == true) || (choix[0]==true && choix2[0] == true) ) {
            setTimeout(() => {
                alert('Egalité')
                setChoix2([false, false, false])
                setChoix([false, false, false])
                // setChoix[index] 
            }, 1000);
        }
        if ((choix[0] == true && choix2[2] == true) || (choix[1] == true && choix2[0] == true) || (choix[2] == true && choix2[1] == true)){
            setTimeout(() => {
                alert ('Joueur 2 remporte 1 point')
                setChoix2([false, false, false])
                setChoix([false, false, false])
            }, 1000);
            setScoreJ2((prev)=> prev + 1)
        }
        if ((choix2[1] == true && choix[0] == true) || (choix2[2]==true && choix[1] == true) || ( choix2[0] == true && choix[2] == true)) {
            setTimeout(() => {
            alert('Joueur 1 remporte 1 point')
            setChoix2([false, false, false])
            setChoix([false, false, false])
            }, 1000);  
            setScoreJ1((prev)=> prev + 1)

        }
    }, [choix2, choix])

//Vérification du score du gagnant
    useEffect(() => {
        if (scoreJ1 === 3 ) {
            alert('Joueur 1 a remporté ce jeu')
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }
        if (scoreJ2 === 3 ) {
            alert('Joueur 2 a remporté ce jeu')
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }
    }, [choix2, choix])



    return(
        <section className='sec1'>
{/* Choix du Joueur 1  */}
            <div className='cards'>
                <div className='p'>
                    <p className='blue'>Joueur 1 : {scoreJ1}/3</p>
                </div>
                <div className='flex'>                
                    <div onClick={()=>changerChoix2(0)} className='card'>
                        <span>👊</span>
                    </div>
                    <div onClick={()=>changerChoix2(1)} className='card'>
                        <span>🖐️</span>
                    </div>
                    <div onClick={()=>changerChoix2(2)} className='card'>
                        <span>✌️</span>
                    </div>
                </div>
            </div>
{/* Choix du Joueur 2  */}
            <div className='cards'>
                <div className='p'>
                    <p>Joueur 2 : {scoreJ2}/3</p>
                </div>
                <div className='flex'>                
                    <div onClick={()=>changerChoix(0)} className='card'>
                        <span>👊</span>
                    </div>
                    <div onClick={()=>changerChoix(1)} className='card'>
                        <span>🖐️</span>
                    </div>
                    <div onClick={()=>changerChoix(2)} className='card'>
                        <span>✌️</span>
                    </div>
                </div>
                <button className='menu' onClick={props.rafraichir}>Menu</button>
            </div>
        </section>
    )
}

export default Manchex3JoueurVersusJoueur
