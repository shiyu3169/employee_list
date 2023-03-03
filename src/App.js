import { useState } from 'react'
import './App.css'
import Employee from './Employee'
import AddEmployee from './AddEmployee'

const initialEmployeesList = [
  { id: 0, name: 'Alice', position: 'Front', salary: 100 },
  { id: 1, name: 'Bob', position: 'Mid', salary: 200 },
  { id: 2, name: 'Chris', position: 'Back', salary: 300 },
]

function App() {
  const [employeesList, setEmployeesList] = useState(initialEmployeesList)

  const addEmployee = (newEmployee) => {
    const id = employeesList.length
      ? employeesList[employeesList.length - 1].id + 1
      : 0
    newEmployee.id = id
    newEmployee.salary = Number(newEmployee.salary)
    setEmployeesList([...employeesList, newEmployee])
  }

  const updateEmployee = (newEmployee) => {
    const newEmployeesList = employeesList.map((employee) => {
      if (employee.id === newEmployee.id) return newEmployee
      return employee
    })
    setEmployeesList(newEmployeesList)
  }

  return (
    <div className='App'>
      <table>
        <tbody>
          {employeesList.map((employee) => (
            <Employee
              key={employee.id}
              employee={employee}
              updateEmployee={updateEmployee}
            />
          ))}
          <AddEmployee addEmployee={addEmployee} />
        </tbody>
      </table>
    </div>
  )
}

export default App
