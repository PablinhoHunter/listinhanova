import LogoImage from '../../assets/logo.svg.png';
import './header.styles.css'

const Header = () =>{
    return(
        <header className='header'>
        <div>
            <img scr={LogoImage} alt='logo minha lista'/>
        </div>
        </header>

    )
}

export default Header

