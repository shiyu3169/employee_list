import { useState } from 'react'

const initialEmployee = {
  name: '',
  position: '',
  salary: '',
}

const AddEmployee = ({ addEmployee }) => {
  const [employee, setEmployee] = useState(initialEmployee)
  const onChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    })
  }
  const createEmployee = () => {
    addEmployee(employee)
    setEmployee(initialEmployee)
  }
  return (
    <tr>
      <td>
        <input
          type='text'
          name='name'
          onChange={onChange}
          value={employee.name}
        />
      </td>
      <td>
        <input
          type='text'
          name='position'
          onChange={onChange}
          value={employee.position}
        />
      </td>
      <td>
        <input
          type='number'
          name='salary'
          onChange={onChange}
          value={employee.salary}
        />
      </td>
      <td>
        <button
          disabled={Object.keys(employee).some((key) => !employee[key])}
          onClick={createEmployee}
        >
          Add
        </button>
      </td>
    </tr>
  )
}
export default AddEmployee
