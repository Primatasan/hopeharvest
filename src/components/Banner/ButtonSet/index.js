import './ButtonSet.css'

export default function ButtonSet(prop){
    return(
        <>
        <div className='button_set'>
            {prop.text}
        </div>
        </>
    )
}