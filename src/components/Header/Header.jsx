import LogoImage from '../../assets/Pablinho-lista.svg';
import './header.styles.css'

const Header = () =>{
    return(
        <header className='header'>
        <div>
            <img src={LogoImage} alt='logo minha lista' className='logo'/>
        </div>
        </header>

    )
}

export default Header

