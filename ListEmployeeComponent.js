import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
       EmployeeService.deleteEmployee(employeeId).then((response) =>{
        getAllEmployees();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> Controle de finanças Pessoais </h2>
           <pre></pre>
           <pre></pre>
           <pre></pre>
    
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Valor </th>
                    <th> Data Recebimento </th>
                    <th> Data Recebimento Esperado </th>
                    <th> Descrição </th>
                    <th> Conta </th>
                    <th> Tipo de Receita </th>
                </thead>
                <Link to = "/add-employee" className = "btn btn-primary mb-2" > Adicionar Receita </Link>
                <pre> </pre>
                <Link to = "/add-employee" className = "btn btn-primary mb-2" > Editar </Link>
                      
                <thead>
                    <th> Valor </th>
                    <th> Data Recebimento </th>
                    <th> Data Recebimento Esperado </th>
                    <th> Descrição </th>
                    <th> Conta </th>
                    <th> Tipo de Receita </th>
                </thead>
                <Link to = "/add-employee" className = "btn btn-primary mb-2" > Adicionar Despesas </Link>
                <pre></pre>
                <Link to = "/add-employee" className = "btn btn-primary mb-2" > Editar </Link>
                
                <thead>
                    <th> Saldo </th>
                    <th> Data De Pagamento </th>
                    <th> Data De Pagamento Esperado </th>
                    <th> Descrição </th>
                    <th> Conta </th> 
                    <th> Tipo De Despesa </th>
                </thead>
                <Link to = "/add-employee" className = "btn btn-primary mb-2" > Adicionar Contas </Link>
                <pre></pre>
                <Link to = "/add-employee" className = "btn btn-primary mb-2" > Editar </Link>
                
            </table>

            <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>{employee.emailId}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

        </div>
        
    )
}

export default ListEmployeeComponent
