export default function Search(){
    function ola(){
        alert('Ola')
    }
    
    return(
        <>
        <div className="input-group mb-3">
            <label className="form-label">Pesquisa</label>
            <input className="form-control" type="text"></input>
            <button className="btn btn-outline-secondary" onClick={ola}>Pesquisar</button>
        </div>

        </>
    )
}