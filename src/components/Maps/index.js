import './Maps.css'
import AlertButton from "./AlertButton";

export default function Maps(){
    return(
        <div className='maps_box'>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14636.893252192702!2d-46.6006362!3d-23.4884647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1686767612064!5m2!1spt-BR!2sbr" width="100%" height="600" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>

        <AlertButton />

        </div>
    )
}