import styles from './registro.module.css'
import { registro } from '../../../services/dataBase'
import { useState } from 'react'




function Registro(){

   

    const [codigo, setCodigo] = useState(0)        
    const [modelo, setModelo] = useState("")
    const [cor, setCor] = useState("")
    const [valor, setValor] = useState(0.0)
    const [estoque, setEstoque] = useState(0)

    
    
    const callRegistro = ()=>{
        registro(
            {   
                codigo: codigo,
                modelo: modelo,
                cor: cor,
                valor: valor,
                status: estoque}
        )
    }

    return <>

        <div className={styles.barraInicial}>
             <h3>Tabela de Motos</h3>
        </div>

        <h2>Preencha as informações abaixo para registrar uma Moto</h2>

        <form className={styles.formGroup}>
         
         <div className={styles.inputGroup}>
           <label >Código </label>
           <input type="text" onChange={(e)=>{setCodigo(e.target.value)}}  />

         </div>

        <div className={styles.inputGroup}>
         <label >Modelo </label>
         <input type="text" onChange={(e)=>{setModelo(e.target.value)}} />
         </div>

         <div className={styles.inputGroup}>
         <label >Cor</label>
         <input type="text"  onChange={(e)=>{setCor(e.target.value)}} />
         </div>

         <div className={styles.inputGroup}>
         <label >Valor </label> 
         <input type="text"  onChange={(e)=>{setValor(e.target.value)}} />
         </div>

         <div className={styles.selectGroup}>
         <label >Status:</label>
            <select id="estoque" name="estoque"  onChange={(e)=>{setEstoque(e.target.value)}}>
                <option value="0">Em estoque</option>
                <option value="1">Sem estoque</option>
                <option value="2">Em trânsito</option>
            </select>
        </div>
        <button onClick={callRegistro} >Registrar</button>
        </form>

    </>
}export default Registro