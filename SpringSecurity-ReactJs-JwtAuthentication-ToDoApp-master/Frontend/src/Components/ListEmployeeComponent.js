import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService';
class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: null,
                currentemployeeid:null,
                currentempfirstname:null,
                currentemplastname:null,
                currentempemail:null
        }
        // this.addEmployee = this.addEmployee.bind(this);
        // this.editEmployee = this.editEmployee.bind(this);
        // this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    // deleteEmployee(id){
    //     EmployeeService.deleteEmployee(id).then( res => {
    //         this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    //     });
    // }
    // viewEmployee(id){
    //     this.props.history.push(`/view-employee/${id}`);
    // }
    // editEmployee(id){
    //     this.props.history.push(`/add-employee/${id}`);
    // }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            const data = this.props.history.location.state?.data;
            console.log(data);
            this.setState({ employees: res.data});
            this.setState({currentemployeeid:res.data.id});
            this.setState({currentempfirstname:res.data.firstName});
            this.setState({currentemplastname:res.data.lastName});
            this.setState({currentempemail:res.data.emailId});
        //     this.setState({ currentemployee: res.data.id});
        //    console.log(this.state.employees);
           
        });
    }

    // addEmployee(){
    //     this.props.history.push('/add-employee/_add');
    // }

    render() {
        return (
            <div>
                <div>
                        {
                            this.state.currentempemail+"hello2"
                            
                        }
                        <div>
                           
                        </div>
                        
                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent

 {/* <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             {/* <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td> }
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table> */}