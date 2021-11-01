import axios from 'axios'

const EmployeesService = {
    baseUrl: "http://localhost:3000",

    fetchEmployees: async function(){
        return axios.get(`${this.baseUrl}/employees`);
    },

    deleteEmployee: async function(employee){
        return axios.delete(`${this.baseUrl}/employees/${employee._id}`);
    }
}

export default EmployeesService;