import './SearchBar.css'

export default function SearchBar(){

    return (
        <>
            <div>
                <input type='text' id='search' name='search' className='input_search' placeholder='Digite sua busca'/>
                <button  className='search_button'>Buscar</button>
            </div>
        </>
    )
}