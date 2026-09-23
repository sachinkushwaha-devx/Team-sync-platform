import { useForm } from "react-hook-form";

export const useAuth = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log("Register Data:", data);
  };

  const onLoginSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
  };
};