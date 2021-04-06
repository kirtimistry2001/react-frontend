import axios from 'axios';
const EMP_API_BASE_URI = 'http://localhost:8080/api/v1/employees';
class EmpService {

    getEmployees() {
        return axios.get(EMP_API_BASE_URI);
    }

    createEmployee(employee) {
        return axios.post(EMP_API_BASE_URI, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(EMP_API_BASE_URI + '/' + employeeId)
    }
}
export default new EmpService()