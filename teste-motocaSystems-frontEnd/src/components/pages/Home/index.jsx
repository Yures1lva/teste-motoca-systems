
import styles from "./home.module.css"
import CardHome from "../../../components/cardHome"
import  { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCards } from "../../../services/dataBase"




function Home() {
    const [cards, setCards] = useState([]);
    const [query, setQuery] = useState("")
   
    useEffect(()  =>  {
       getCards(setCards)
    }, [])
    
    let filteredData = cards.filter((item)=>{
        const modeloLower = item.modelo.toLowerCase()
        const corLower = item.cor.toLowerCase()
        const codigoLower = item.codigo.toLowerCase()
        const queryLower = query.toLowerCase()

        return (modeloLower.includes(queryLower) || corLower.includes(queryLower) || codigoLower.includes(queryLower) )
    })

    const nav = useNavigate()

     return (
         <>
        
         <div className={styles.barraInicial}>
             <h3>Tabela de Motos</h3>
 
                <div >
                <input className={styles.buscador} onChange={(e)=>{
                        setQuery(e.target.value)                   
                    }} type="text" placeholder="Busque por código, nome e cor" value={query}/>
                
                    <button onClick={()=>{ nav("/registro")}} ><i>+ </i>NOVO REGISTRO</button>
                </div>
             
         </div>
         {(filteredData.map((card) => (<CardHome  key={card.id} props={card}/>)))}
 
           
         </>
     )
} export default Home