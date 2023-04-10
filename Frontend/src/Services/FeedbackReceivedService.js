import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:4545/api/v1/Received/";
const EMPLOYEE_API_BASE_URL2 = "http://localhost:4545/api/v1/Given/";
class FeedbackReceivedService {

    getResults(data){
       
        return axios.get(EMPLOYEE_API_BASE_URL+data);
    }


    getResultsgiven(data){
        console.log('done');
       
        return axios.get(EMPLOYEE_API_BASE_URL2+data);
    }
   

}

export default new FeedbackReceivedService();