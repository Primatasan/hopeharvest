import './Footer.css'
import logo from 'assets/img/hopeharvest_branco_logo.png'
import apple from 'assets/img/appstore.png'
import google from 'assets/img/play.png'
import { Icon } from '@chakra-ui/react'

import {FaPhoneAlt,
        FaEnvelope,
        FaMapMarkerAlt, 
        FaFacebookF,
        FaTwitter,
        FaLinkedinIn,
        FaInstagram
    } from 'react-icons/fa'

export default function Footer(){

    const paginas = [
        "pagina 01",
        "pagina 02",
        "pagina 03",
        "pagina 04",
        "pagina 05"
    ]

    const servicos = [
        "serviços 02",
        "serviços 01",
        "serviços 03",
        "serviços 04",
        "serviços 05"
    ]

    const contato = [
        {
            "icon": FaPhoneAlt,
            "text": "(xx) XXXX-XXXX"
        },
        {
            "icon": FaEnvelope,
            "text": "XXXX@gmail.com"
        },
        {
            "icon": FaMapMarkerAlt,
            "text": "Rua Lorem ipsum, XXX, Cidade, Estado, CEP:xxxxx-xxx"
        },
    ]

    const sociais =[

        FaFacebookF,
        FaTwitter,
        FaLinkedinIn,
        FaInstagram
    ]

    return(
        <div className='footer_box'>
            <div className='box01'>
                <img src={logo} alt='Logo' className='logo_footer'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='app_card'>
                    <img src={apple} alt='app store' className='app_logo'/>
                    <img src={google} alt='play store' className='app_logo'/>
                </div>
            </div>
            <div className='box02'>
                <h3>Paginas</h3>
                {paginas.map((e) => <p>{e}</p>)}
            </div>
            <div className='box02'>
                <h3>Serviços</h3>
                {servicos.map((e) => <p>{e}</p>)}
            </div>
            <div className='box02'>
                <h3>Contato</h3>
                {contato.map((e) => <div className='contact_card'><Icon as={e.icon} boxSize={5} color='#FCFCFC' /> <p>{e.text}</p></div>)}
            </div>
            <div className='box03'>
                <h3>Redes Sociais</h3>
                <div className='social_icons_card'>
                    {sociais.map((e) => <Icon as={e} boxSize={6} color='#FCFCFC' className='social_icon'/>)}
                </div>
            </div>
        </div>
    )
}