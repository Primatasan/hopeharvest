import BigNumber from './BigNumber'
import './Numbers.css'

export default function Numbers (){
    return (
        <div className='numbers_box'>
            <BigNumber number='3M' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
            <BigNumber number='20M' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
        </div>
    )
}