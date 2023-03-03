import { useEffect, useRef, useState } from 'react'

const Employee = ({ employee, updateEmployee }) => {
  const [editing, setEditing] = useState(false)
  const [newSalary, setNewSalary] = useState(employee.salary)
  const salaryRef = useRef(null)
  const element = salaryRef.current

  useEffect(() => {
    if (!element) return
    const onClick = (e) => {
      if (!element.contains(e.target)) {
        setEditing(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
    }
  }, [element])

  const onSave = () => {
    const newEmployee = {
      ...employee,
      salary: newSalary,
    }
    updateEmployee(newEmployee)
    setEditing(false)
  }
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.position}</td>
      {!editing ? (
        <td ref={salaryRef} onClick={() => setEditing(true)}>
          {employee.salary}
        </td>
      ) : (
        <td>
          <input
            ref={salaryRef}
            type='number'
            value={newSalary}
            onChange={(e) => setNewSalary(e.target.value)}
          />
        </td>
      )}
      <td>
        <button onClick={onSave} disabled={newSalary === employee.salary}>
          Save
        </button>
      </td>
    </tr>
  )
}

export default Employee
