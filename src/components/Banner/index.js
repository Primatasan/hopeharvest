import './Banner.css'
import logo from 'assets/img/hopeharvest_branco_logo.png'
import ButtonSet from 'components/Banner/ButtonSet'

export default function Banner (){
    return (
        <>
        <div className='banner'>
            <img src={logo} alt='Logo' className='banner_logo'/>
            <div>
                <h1>Plantando esperança por um mundo mais solidário.</h1>
                <h1>Venha colher conosco!</h1>
            </div>
            <div className='button_box'>
                <ButtonSet text='Aceito doação' />
                <ButtonSet text='Quero doar' />
            </div>

        </div>
        </>
    )
}