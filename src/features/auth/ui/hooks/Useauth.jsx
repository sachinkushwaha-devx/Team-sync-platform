import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginEmployee, registerEmployee } from "./state/auth/authAction";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector((state) => state.auth.error);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = async (data) => {
    const resultAction = await dispatch(registerEmployee(data));

    if (registerEmployee.fulfilled.match(resultAction)) {
      navigate("/");
    }
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
    authError,
    onRegisterSubmit,
    onLoginSubmit,
    navigate,
  };
};