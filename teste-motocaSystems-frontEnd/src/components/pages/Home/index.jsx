
import styles from "./home.module.css"
import CardHome from "../../../components/cardHome"
import  { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCards } from "../../../services/dataBase"



function Home() {
    const [cards,setCards] = useState([]);
   
    useEffect(()  =>  {
       getCards(setCards)
    }, [])
 
     return (
         <>
        
         <div className={styles.barraInicial}>
             <h3>Tabela de Motos</h3>
             <ul>
                 <li>Barra de pesquisa</li>
                 <li><Link to={"/registro"} className={styles.buttonRegistro} ><button  ><i>+ </i>NOVO REGISTRO</button></Link ></li>
             </ul>
         </div>
         {(cards.map((card) => (<CardHome  key={card.id} props={card}/>)))}
 
           
         </>
     )
} export default Home