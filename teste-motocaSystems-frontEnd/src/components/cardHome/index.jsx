/* eslint-disable react/prop-types */
import trash from '../../assets/trash.png'
import view from '../../assets/view.png'
import styles from './card.module.css'
import Moto from './modelMoto'
import { deteleCards } from '../../services/dataBase'
import { Link } from 'react-router-dom'





// eslint-disable-next-line react/prop-types
function CardHome({props}){
 
    let meta = [
        {style: styles.estoque, value:"Em estoque"},
        {style: styles.semEstoque, value:"sem estoque"},
        {style: styles.transito, value:"Em transito"}
    
    ]

    //refresh com useState
   

    // eslint-disable-next-line no-unused-vars
    const moto = new Moto({id: props.id, codigo: props.codigo, modelo: props.modelo, cor: props.cor, valor: props.valor ,status: props.status})
    meta [moto.status]
  

    return <>
    
        <article  className={styles.card}>
                <p>#{("000" + moto.codigo).slice(-4)}</p>
                <ul>
                    <li><span>{moto.modelo} <a className={meta[moto.status].style} >{meta[moto.status].value}</a></span></li>
                    <li>valor: R$<span>{moto.valor}</span></li>
                    <li>cor: <span> {moto.cor}</span></li>
                </ul>
                <div>
                   
                    <a  onClick={async ()=>{ deteleCards(moto.id).then(()=>{window.location.reload()})
                        
                    }}>

                    <img src={trash} alt="excluir" />


                    </a>

                    <Link to="/edicao">

                    <img src={view} alt="editar/vizualizar"></img>


                    </Link>

                </div>
            

        </article>
   
    </>

} export default CardHome