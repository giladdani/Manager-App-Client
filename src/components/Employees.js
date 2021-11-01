import React from 'react'
import EmployeesService from './services/employeesService';
import EmployeesList from './EmployeesList'
import EmployeeDetails from './EmployeeDetails';

class Employees extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employees: [],
            currentEmployee: undefined
        }
        this.handleEmployeeClick = this.handleEmployeeClick.bind(this);
        this.handleFireButtonClick = this.handleFireButtonClick.bind(this);
    }

    componentDidMount(){
        this.fetchAllEmployees();
    }

    handleEmployeeClick(employee){
        this.setState({currentEmployee: employee});
    }
    
    handleFireButtonClick(employee){
        EmployeesService.deleteEmployee(employee).then((result) => {
            console.log(result);
        }, (err) =>{
            console.log(err);
        })
    }

    async fetchAllEmployees(){
        EmployeesService.fetchEmployees().then((result) => {
            this.setState({employees: result.data});
        }, (err) => {
            // @ handle error
        })
    }

    render(){
        return(
            <div>
                <p>Manage Employees</p>
                {this.state.employees.length > 0 && (<EmployeesList data={this.state} onClick={(employee) => this.handleEmployeeClick(employee)}/>)}
                {this.state.currentEmployee && <EmployeeDetails employee={this.state.currentEmployee} onFireButtonClick={(employee) => this.handleFireButtonClick(employee)}/>}
            </div>
        )
    }
}

export default Employees;