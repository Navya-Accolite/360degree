import axios from 'axios';
import authService from './auth.service';
const EMPLOYEE_API_BASE_URL = "http://localhost:4545/api/v1/employees/";

class EmployeeService {

    getEmployees(){
        console.log(authService.getCurrentUser());
        return axios.get(EMPLOYEE_API_BASE_URL+"vaish");
    }

    
}

export default new EmployeeService();