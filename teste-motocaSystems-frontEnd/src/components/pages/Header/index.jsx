import './header.module.css'
import home from '../../../assets/home.png'
import perfil from '../../../assets/perfil.png'
import { Link } from 'react-router-dom'

function Header(){
    return (
        <>
        <div>
            <ul>
                <li><Link to="/" ><img src={home} alt="pagina incial" /></Link></li>
                <li><a href=""><img src={perfil} alt="página de perfil indisponível" /></a></li>
            </ul>
        </div>
        </>
    )
} export default Header