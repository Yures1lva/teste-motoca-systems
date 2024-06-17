import { updateCards } from "../../../services/dataBase"
import styles from "../Edicao/edicao.module.css"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from 'react'



function Edicao( ) {
   
   const location = useLocation()
   const moto = location.state
   
   const [modelo, setModelo] = useState(moto.modelo)
   const [cor, setCor] = useState(moto.cor)
   const [valor, setValor] = useState(moto.valor)
   const [estoque, setEstoque] = useState(moto.estoque)
   const nav = useNavigate()
 
   
    return <>
    <div className={styles.barraInicial}>
             <h3>Editar</h3>
        </div>
    <h2>Edite as informações que preferir!</h2>

    <div className={styles.inputGroup}>
       <label className={styles.labelDisable} >Código </label>
       <input type="text" disabled={true} value={"# "+("000" + moto.codigo).slice(-4)}  />
    </div>

    <div className={styles.inputGroup}>
       <label >Modelo </label>
       <input type="text" value={modelo} onChange={(e)=>{
         setModelo(e.target.value)
         }}  />
    </div>

    <div className={styles.inputGroup}>
       <label >Cor </label>
       <input type="text"  value={cor} onChange={(e)=>{
            setCor(e.target.value)
        }} />
    </div>

    <div className={styles.inputGroup}>
       <label >Valor </label>
       <input type="text" value={valor} onChange={(e)=>{
         setValor(e.target.value)        
         }} />
    </div>

    <div className={styles.inputGroup}>
    <label >Status:</label>
            <select id="estoque" name="estoque" value={estoque} onChange={(e)=>{
               setEstoque(e.target.value)}}>
                <option value="0">Em estoque</option>
                <option value="1">Sem estoque</option>
                <option value="2">Em trânsito</option>
            </select>

    </div>

    <button className={styles.buttonUp} onClick={()=>{updateCards(moto.id,{modelo: modelo, valor: valor, cor: cor, status: estoque} ).then(()=>{nav("/")})}  } >Atualizar</button>
    </>
} export default Edicao