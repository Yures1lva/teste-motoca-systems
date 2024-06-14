import './header.module.css'
import home from '../../../assets/home.png'
import perfil from '../../../assets/perfil.png'

function Header(){
    return (
        <>
        <div>
            <ul>
                <li><a href=""><img src={home} alt="pagina incial" /></a></li>
                <li><a href=""><img src={perfil} alt="página de perfil indisponível" /></a></li>
            </ul>
        </div>
        </>
    )
} export default Header