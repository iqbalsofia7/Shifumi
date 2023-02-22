import { useState, useEffect } from 'react'
import './JoueurVersusJoueur.css' //import du style CSS

function JoueurVersusJoueur(props) {
    const [choix, setChoix] = useState([false, false, false])
    const [choix2, setChoix2] = useState([false, false, false])
    const changerChoix =(index)=>{
        const newChoix = [...choix]
        newChoix[index] = !newChoix[index]
        setChoix(newChoix)
    }
    const changerChoix2 =(index2)=>{
        const newChoix2 = [...choix2]
        newChoix2[index2] = !newChoix2[index2]
        setChoix2(newChoix2)
    }
//Conditions qui vérifient la carte du joueur et celle de l'ordinateur
    useEffect(() => {
        if ((choix[1] == true && choix2[1] == true ) || (choix[2] == true && choix2[2] == true) || (choix[0]==true && choix2[0] == true) ) {
            setTimeout(() => {
                alert('Egalité')
                setChoix2([false, false, false])
                setChoix([false, false, false])
                // setChoix[index] 
            }, 700);
        }
        if ((choix[0] == true && choix2[2] == true) || (choix[1] == true && choix2[0] == true) || (choix[2] == true && choix2[1] == true)){
            setTimeout(() => {
                alert ('Joueur 2 a gagné cette manche')
                setChoix2([false, false, false])
                setChoix([false, false, false])
            }, 700);
        }
        if ((choix2[1] == true && choix[0] == true) || (choix2[2]==true && choix[1] == true) || ( choix2[0] == true && choix[2] == true)) {
            setTimeout(() => {
            alert('Joueur 1 a gagné cette manche')
            setChoix2([false, false, false])
            setChoix([false, false, false])
            }, 700);
        }
    }, [choix2, choix])

    return(
        <section className='sec1'>
            <div className='cards'>
                <div className='p'>
                    <p className='blue'>Joueur 1</p>
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

            <div className='cards'>
                <div className='p'>
                    <p>Joueur 2</p>
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
                <button onClick={props.rafraichir}>Rejouer</button>
            </div>
        </section>
    )
}


export default JoueurVersusJoueur
