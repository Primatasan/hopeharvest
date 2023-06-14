import './Faq.css'
import FaqAccordion from './FaqAccordion'

export default function Faq(){
    return(
       <div className='faq_box'>
            <h2>Perguntas frequentes</h2>
            <FaqAccordion />
       </div>
    )
}