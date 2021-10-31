import React from 'react'

class EmployeesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employees: props.data.employees
        }
    }

    render(){
        const employeesList = this.state.employees.map((employee) => {
            return(
                <li key={employee._id} onClick={this.handleEmployeeClick}>
                    {employee.first_name}
                </li>
            )
        })

        return(
            <div>
                <ul className="employeesList">
                    {employeesList}
                </ul>
            </div>
        )
    }
}

export default EmployeesList;