import Logo from './Logo';
import MenuItems from './MenuItems';
import { useState,useRef } from 'react';

const Header = ()=>{
    const[smallMenu,setSmallMenu] = useState(false);
    
    const handleSmallMenu = ()=>{
        setSmallMenu(!smallMenu);
    }
    const m = useRef()
    console.log(m.current);
    return (
         <header ref={m}>
             {!smallMenu && <div className="hamb" onClick={handleSmallMenu}>
                </div>}
            <Logo />
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