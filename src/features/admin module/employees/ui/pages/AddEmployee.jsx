import React from 'react'
import AddEmployeeHeader from '../components/addEmployee/AddeEmployeeHeader'
import PersonalInfoForm from '../components/addEmployee/PersonalInfoForm'
import EmploymentDetailsForm from '../components/addEmployee/EmploymentDetailsForm'
import FormActions from '../components/addEmployee/FormActions'

const AddEmployee = () => {
  return (
    <div className= "min-h-screen bg-[var(--bg-main)] p-8">
        <div className="max-w-[1200px] mx-auto">

            <AddEmployeeHeader />

            <PersonalInfoForm />

            <EmploymentDetailsForm />

            <FormActions />

        </div>
      
    </div>
  );
};

export default AddEmployee
