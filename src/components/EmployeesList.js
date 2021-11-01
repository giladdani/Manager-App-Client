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
                <li key={employee._id} onClick={() => this.props.onClick(employee)}>
                    {employee.first_name}
                </li>
            )
        })

        return(
            <div>
                <ul className="employeesList xx-large-font">
                    {employeesList}
                </ul>
            </div>
        )
    }
}

export default EmployeesList;