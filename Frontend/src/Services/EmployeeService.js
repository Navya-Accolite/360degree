import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:4545/api/v1/";

class EmployeeService {

    getEmployees(data){
        return axios.get(EMPLOYEE_API_BASE_URL+data);
    }

}

export default new EmployeeService();