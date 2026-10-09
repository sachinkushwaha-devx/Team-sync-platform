// ========================================
// UPDATED AddEmployee.jsx
// WITH REACT HOOK FORM
// ========================================

import { useForm } from "react-hook-form";

import AddEmployeeHeader from "./..//components/addEmployee/AddeEmployeeHeader";
import EmploymentDetailsForm from "../components/addEmployee/EmploymentDetailsForm";
import FormActions from "../components/addEmployee/FormActions";
import PersonalInfoForm from "../components/addEmployee/PersonalInfoForm";
import { createEmployee } from "../../api/EmployeeApis";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";



const AddEmployee = () => {
  // REACT HOOK FORM
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      bio: "",
      department: "",
      role: "",
      joiningDate: "",
      status: "active",
      avatar: "",
      password: "",
    },
  });
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // SUBMIT
  const onSubmit = async (data) => {
    setSubmitError("");
    try {
      await createEmployee(data);
      await queryClient.invalidateQueries({ queryKey: ["employees"] });
      reset();
      navigate("/home/employee");
    } catch (error) {
      setSubmitError(
        error.response?.data?.message ?? error.message ?? "Could not create employee."
      );
    }
  };

  return (
    <div className="min-h-dvh bg-[var(--bg-main)] p-[var(--page-gutter)]">
      <div className="mx-auto">
        {/* HEADER */}
        <AddEmployeeHeader />

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* PERSONAL INFO */}
          <PersonalInfoForm
            register={register}
            errors={errors}
            setValue={setValue}
            watch={watch}
          />

          {/* EMPLOYMENT DETAILS */}
          <EmploymentDetailsForm register={register} errors={errors} />

          {/* ACTIONS */}
          {submitError && (
            <p role="alert" className="mt-6 text-right text-red-500">
              {submitError}
            </p>
          )}
          <FormActions isSubmitting={isSubmitting} />
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;