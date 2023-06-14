import './BigNumber.css'

export default function BigNumber(prop){
    return (
        <div className='big_number_card'>
            <h2>{prop.number}</h2>
            <p>{prop.text}</p>
        </div>
    )
}