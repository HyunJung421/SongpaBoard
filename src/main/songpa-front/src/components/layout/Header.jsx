import TopMenu from './TopMenu';
import 'styles/Header.scss';
import songpaLogo from 'images/songpagu_logo01.jpg'

const Header = () => {
    return (
        <header className='header-layout'>
            <img src={songpaLogo} className="top-logo" alt="logo" />
            <h2>송파구 생활 정보</h2>
            <TopMenu></TopMenu>
        </header>

    )
}

export default Header;