import Header from "../Header"
import styles from "./home.module.css"
import CardHome from "../../../components/cardHome"





function Home() {
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
        <CardHome></CardHome>
        
        </>
    )
} export default Home