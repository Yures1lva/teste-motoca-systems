import trash from '../../assets/trash.png'
import view from '../../assets/view.png'
import styles from './card.module.css'


function CardHome(){

 
    return <>
    
        <article  className={styles.card}>



                <p>#0001</p>
                <ul>
                    <li><span>HONDA POP 110i <a className={styles.transito} >Em transito</a></span></li>
                    <li>valor: R$<span>15.000</span></li>
                    <li>cor: <span> BRANCA</span></li>
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