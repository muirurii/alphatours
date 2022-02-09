import Logo from './Logo';
import MenuItems from './MenuItems';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>{
    const[smallMenu,setSmallMenu] = useState(false);
    
    const handleSmallMenu = ()=>{
        setSmallMenu(!smallMenu);
    }
    return (
         <header>
             {!smallMenu && <div className="hamb" onClick={handleSmallMenu}>
                </div>}
            <Link to={"/alphatours"}>
                <Logo />
            </Link>
            <nav className = "main-nav">
                <MenuItems />
            </nav>
            <nav onClick={handleSmallMenu} className={`small-menu ${smallMenu ? 'open' : null }`}>
                <button>x</button>
                <MenuItems />
            </nav>            
        </header>
    );
}

export default Header;