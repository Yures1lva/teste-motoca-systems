
import styles from "./home.module.css"
import CardHome from "../../../components/cardHome"
import  { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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


     return (
         <>
        
         <div className={styles.barraInicial}>
             <h3>Tabela de Motos</h3>
             <ul>
                 <li className="inputGroup">
                    <input onChange={(e)=>{
                        setQuery(e.target.value)                   
                    }} type="text" placeholder="Busque por código, nome e cor" value={query}/>
                 </li>
                 <li><Link to={"/registro"} className={styles.buttonRegistro} ><button  ><i>+ </i>NOVO REGISTRO</button></Link ></li>
             </ul>
         </div>
         {(filteredData.map((card) => (<CardHome  key={card.id} props={card}/>)))}
 
           
         </>
     )
} export default Home