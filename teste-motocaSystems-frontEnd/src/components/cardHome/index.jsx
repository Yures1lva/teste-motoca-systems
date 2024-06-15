/* eslint-disable react/prop-types */
import trash from '../../assets/trash.png'
import view from '../../assets/view.png'
import styles from './card.module.css'
import Moto from './modelMoto'




// eslint-disable-next-line react/prop-types
function CardHome({props}){
 
    let meta = [
        {style: styles.estoque, value:"Em estoque"},
        {style: styles.semEstoque, value:"sem estoque"},
        {style: styles.transito, value:"Em transito"}
    
    ]

    // eslint-disable-next-line no-unused-vars
    const moto = new Moto({id: props.id, modelo: props.modelo, cor: props.cor, valor: props.valor ,status: props.status})
    meta [moto.status]
  
    
    return <>
    
        <article  className={styles.card}>
                <p>#{("000" + moto.id).slice(-4)}</p>
                <ul>
                    <li><span>{moto.modelo} <a className={meta[moto.status].style} >{meta[moto.status].value}</a></span></li>
                    <li>valor: R$<span>{moto.valor}</span></li>
                    <li>cor: <span> {moto.cor}</span></li>
                </ul>
                <div>
                   
                    <a href="">

                    <img src={trash} alt="excluir" />


                    </a>

                    <a href="">

                    <img src={view} alt="editar/vizualizar"></img>


                    </a>

                </div>
            

        </article>
   
    </>

} export default CardHome