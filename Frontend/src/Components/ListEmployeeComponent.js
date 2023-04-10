import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService';
import { NavLink } from "react-router-dom";
import '../styles/stylesfordashboard.css';
import profilepic from '../images/profilepic.png'
class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: null,
                currentemployeeid:null,
                currentempfirstname:null,
                currentemplastname:null,
                currentempemail:null,
                currentemptype:null,
                currentempfeedid:null,
                currentempmangername:null,
        }
        
    }

    componentDidMount(){
        
            EmployeeService.getEmployees(this.props.history.location.state?.data).then((res) => {
            this.setState({ employees: res.data});
            this.setState({currentemployeeid:res.data[0][0]});
            this.setState({currentempfirstname:res.data[0][1]});
            this.setState({currentempemail:res.data[0][2]});
            this.setState({currentemptype:res.data[0][4]});
            this.setState({currentempmangername:res.data[0][3]});
        
        });
    }

    // addEmployee(){
    //     this.props.history.push('/add-employee/_add');
    // }

    render() {
        return (

    <div>
                
      <header>
        <nav className='navbar'>
          <h1>Employee Feedback</h1>
          <NavLink to="/" className="nav_link">Home</NavLink>
          <NavLink to={{pathname: '/received',state: {data: this.state.currentemployeeid,prop2: this.state.currentempfirstname}}}className="nav_link">
                Feedbacks Received
          </NavLink>

          <NavLink to={{pathname: '/given',state: {data: this.state.currentemployeeid,prop2: this.state.currentempfirstname}}}className="nav_link">
                Feedbacks Given
          </NavLink>
          <NavLink to="/" className="nav_link">Request Feedback</NavLink>  
          <NavLink to="/" className="nav_link">Give Feedback</NavLink> 
          {this.state.currentemptype==="admin" &&<NavLink to="/register" className="nav_link">Admin</NavLink>}
        </nav>  
      </header>

      <div>

        <div className='welcome'>Welcome!</div>
      <div class="container">
      <div class="profile-card">
        <div class="cover-pic" />
        <img src={profilepic} class="profile-pic" />

        <h1>{this.state.currentempfirstname} </h1>
        <p>{this.state.currentempemail}</p>
        <div class="row">
          <div>
            <h2>{this.state.currentemployeeid}</h2>
            <p>Employee Id</p>
          </div>
          <div>
            <h2>{this.state.currentempmangername}</h2>
            <p>Manger Name</p>
          </div>
          <div>
            <h2>{this.state.currentemptype}</h2>
            <p>Employee Type</p>
          </div>
        </div>
      </div>
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

                        