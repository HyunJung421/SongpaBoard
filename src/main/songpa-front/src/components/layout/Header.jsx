import TopMenu from './TopMenu';
import 'styles/Header.scss';

const Header = () => {
    return (
        <header className='header-layout'>
            <h2>송파구 생활 정보</h2>
            <TopMenu></TopMenu>
        </header>

    )
}

export default Header;