import trash from '../../assets/trash.png'
import view from '../../assets/view.png'
import styles from './card.module.css'
import Moto from './modelMoto'


function CardHome(){

    // eslint-disable-next-line no-unused-vars
    const moto = new Moto({codigo:2, modelo: "POP 110i",cor:"BRANCA",valor:10000.0,status:"Em transito"})
    
    return <>
    
        <article  className={styles.card}>



                <p>#{moto.codigo}</p>
                <ul>
                    <li><span>{moto.modelo} <a className={styles.transito} >{moto.status}</a></span></li>
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