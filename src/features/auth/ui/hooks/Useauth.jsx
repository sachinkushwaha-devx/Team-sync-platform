import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginEmployee } from "./state/auth/authAction";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log("Register Data:", data);
  };

  const onLoginSubmit = async (data) => {
    const resultAction = await dispatch(loginEmployee(data));

    if (loginEmployee.fulfilled.match(resultAction)) {
      navigate("/home");
    }
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
    navigate,
  };
};