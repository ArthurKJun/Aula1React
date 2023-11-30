export default function CadContato(){
    return(
        <>
        <h1 className="text-center">Novo Usuário</h1>
        
        <label className='form-label'>Informe o Nome: </label>
        <input className='form-control' type='text' placeholder='Informe o Nome'></input>

        <label className='form-label'>Informe o Email: </label>
        <input className='form-control' type='text' placeholder='Informe o Email'></input>

        <label className='form-label'>Informe o Telefone: </label>
        <input className='form-control' type='text' placeholder='Informe o Telefone'></input>

        <div className='mt-3 d-flex justify-content-between'>
          <button className='btn btn-primary'>Salvar</button>
          <button className='btn btn-danger'>Cancelar</button>
        </div>
        </>
    )
}