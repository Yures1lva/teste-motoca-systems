import styles from "../Edicao/edicao.module.css"


function Edicao() {
    
    return <>
    <div className={styles.barraInicial}>
             <h3>Editar</h3>
        </div>
    <h2>Edite as informações que preferir!</h2>

    <div className={styles.inputGroup}>
       <label >Código </label>
       <input type="text"  />
    </div>

    <div className={styles.inputGroup}>
       <label >Modelo </label>
       <input type="text"  />
    </div>

    <div className={styles.inputGroup}>
       <label >Cor </label>
       <input type="text"  />
    </div>

    <div className={styles.inputGroup}>
       <label >Valor </label>
       <input type="text"  />
    </div>

    <div className={styles.inputGroup}>
       <label >Status </label>
       <input type="text"  />
    </div>

    <button>Atualizar</button>
    </>
} export default Edicao