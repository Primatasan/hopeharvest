import './NavBar.css'
import SearchBar from 'components/NavBar/SearchBar'
import { Icon } from '@chakra-ui/react'
import {FaShoppingBasket, FaUser} from 'react-icons/fa'
import logo from 'assets/img/hopeharvest_branco_logo.png'

export default function NavBar(){
    return(
        <div className='top_bar'>
            <img src={logo} alt='hopeharvest logo' className='logo' />
            
            <div className='nav_bar'>
                <SearchBar />
                <Icon as={FaShoppingBasket} boxSize={7} color={'whiteAlpha.900'} ml={6} className='nav_icon'/>
                <Icon as={FaUser} boxSize={7} color={'whiteAlpha.900'} ml={6} className='nav_icon'/>
            </div>
        </div>
    )
}