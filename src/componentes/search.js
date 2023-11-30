export default function Search(){
    function ola(){
        alert('Ola')
    }
    
    return(
        <>
        <div>
            <label className="form-label">Pesquisa</label>
            <input className="" type="text"></input>
            <button className="" onClick={ola}>Pesquisar</button>
        </div>

        </>
    )
}