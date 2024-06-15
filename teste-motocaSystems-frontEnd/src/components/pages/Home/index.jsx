/* eslint-disable no-unused-vars */
import Header from "../Header"
import styles from "./home.module.css"
import CardHome from "../../../components/cardHome"
import React, { useEffect, useState } from "react"




function Home() {
    const [cards,setCards] = useState([]);
   
    const getCards = () => {
        
        try {
             fetch('http://localhost:3000/motos').then((res) => res.json()).then((data) => setCards(data))
        } catch (error) {
            console.log("deu erro")
        }
    }
     
    useEffect(() => {
        getCards()
    }, [])
 
     return (
         <>
         <Header></Header>
         <div className={styles.barraInicial}>
             <h3>Tabela de Motos</h3>
             <ul>
                 <li>Barra de pesquisa</li>
                 <li><button><i>+ </i>NOVO REGISTRO</button></li>
             </ul>
         </div>
         {(cards.map((card) => (<CardHome  key={card.codigo} props={card}/>)))}
 
           
         </>
     )
} export default Home