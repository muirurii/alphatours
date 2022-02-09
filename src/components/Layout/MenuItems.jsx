import {Link} from 'react-router-dom';

const MenuItems = ()=>{
    return(
        <ul className='list'>
        <li><Link to="/alphatours">HOME</Link></li>
        <li className='dest'><span>CATEGORIES</span> 
            <ul className="more">
                <li><Link to="/destinations/wildlife">Wildlife tour</Link></li>
                <li><Link to="/destinations/mountain-climbing">Mountain climbing</Link></li>
                <li><Link to="/destinations/adventure">Adventure</Link></li>
                <li><Link to="/destinations/camping">Camping</Link></li>
            </ul>
        </li>
        <li><Link to="about">ABOUT</Link></li>
        <li><Link to="contacts">CONTACTS</Link></li>
    </ul>
    );
}

export default MenuItems;