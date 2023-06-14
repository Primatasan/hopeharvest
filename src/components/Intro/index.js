import './Intro.css'
import imagem from 'assets/img/close-up-smiley-girl-getting-apples.jpg'

export default function Intro(){
    return(
        <div className='intro_box'>
            <div className='intro_card'>
                <img src={imagem} alt='Menina doando alimentos' />
                <div className='text_card'>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                </div>
            </div>
        </div>
    )
}