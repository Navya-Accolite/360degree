import React, {useRef, useState} from 'react'
import AuthService from '../Services/auth.service';

function Register(props) {

    const form = useRef();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emp_type, setEmpType] = useState('');
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [managerid,setManagerId]=useState('');


    const onChangeFirstname = (e) => {
        const firstname = e.target.value;
        setFirstname(firstname);
    };

    const onChangeLastname = (e) => {
        const lastname = e.target.value;
        setLastname(lastname);
    };

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };  

    const onChangeEmpType=(e)=>{
        const emp_type=e.target.value;
        setEmpType(emp_type);
    }

    const onChangeManager=(e)=>{
        const managerid=e.target.value;
        setManagerId(managerid);
    }
    const handleRegister = (e) => {
        e.preventDefault();
        AuthService.register(username, password).then(
            (res) => {
                console.log("Registered succesfully!")
                props.history.push("/login");
                window.location.reload();
            },
            (error) => {
                console.log("Registration failed!");
                console.log(error);
            }
        )
        
    }

    return (
        <>
        <div className="full-container2">
            <form 
            onSubmit={handleRegister}
            ref={form}
            className="form-container2">
                    <h1>Register</h1><br />
                    <label for="username">Username(email): </label>
                    <input type="username" 
                    placeholder="username"                     
                    value={username}
                    onChange={onChangeUsername}
                    required
                    ></input>

                    <label for="firstname">First Name: </label>
                    <input type="text" 
                    placeholder="first name"                     
                    value={firstname}
                    onChange={onChangeFirstname}
                    required
                    ></input>

                    <label for="lastname">Last Name: </label>
                    <input type="text" 
                    placeholder="last name"                     
                    value={lastname}
                    onChange={onChangeLastname}
                    required
                    ></input>

                    <label for="emp_type">Employee Type: </label>
                    <input type="text" 
                    placeholder="employee type"
                    value={emp_type}
                    onChange={onChangeEmpType}                    
                    required></input>

                    <label for="password">Manger ID: </label>
                    <input type="text" 
                    placeholder="manager id"
                    value={managerid}
                    onChange={onChangeManager}                    
                    required></input>

                    <label for="password">Password: </label>
                    <input type="password" 
                    placeholder="password"
                    value={password}
                    onChange={onChangePassword}                    
                    required></input>

                    <button>Register</button>
                    
            </form>
        </div>
            
        </>
    )
}

export default Register
