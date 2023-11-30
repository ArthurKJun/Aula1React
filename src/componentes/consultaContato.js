import Search from "./search";

export default function ConsultaContato(){
    return(
        <>
        <h1 className="text-center">Tabela de Usuários</h1>
        <hr/>
        <Search />
        <table className="table table-dark table-hover table-striped" >
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Maria</td>
                    <td>maria@gmai.com</td>
                    <td>47999999999</td>                
                </tr>
                <tr>
                    <td>joão</td>
                    <td>joao@gmai.com</td>
                    <td>47999999998</td>                
                </tr>
                <tr>
                    <td>Alfredo</td>
                    <td>alfredinho@gmai.com</td>
                    <td>47991222232</td>                
                </tr>
            </tbody>
        </table>
     
        </>
    )
    {/*
    const contatos = [
        {id:1,nome:"Maria",email:"maria@gmail.com"}
        {id:1,nome:"Maria",email:"maria@gmail.com"}
    ]    

    <tbody>
        {
            contatos.map(ct =>
                <tr>
                    <td>{ct.id}</td>
                    <td>{ct.nome}</td>
                    <td>{ct.email}</td>
                </tr>
                )

        }
    <tbody/>    
    */}
}