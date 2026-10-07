import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const FormInput = ({
  label,
  placeholder,
  type = "text",
  register,
  name,
  errors,
  registerOptions = { required: `${label} is required` },
  autoComplete,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPasswordField = type === "password";

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-3 text-sm font-semibold text-(--text-secondary)"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          type={isPasswordField && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register(name, registerOptions)}
          className={`w-full h-16 rounded-2xl border border-(--border-color) bg-(--bg-main) px-5 outline-none ${
            isPasswordField ? "pr-14" : ""
          }`}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setIsPasswordVisible((visible) => !visible)}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            aria-pressed={isPasswordVisible}
            className="absolute inset-y-0 right-4 flex items-center text-(--text-secondary)"
          >
            {isPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        )}
      </div>

      {errors?.[name] && (
        <p className="text-red-500 text-sm mt-2">
          {errors[name].message}
        </p>
      )}

    </div>
  );
};

export default FormInput;