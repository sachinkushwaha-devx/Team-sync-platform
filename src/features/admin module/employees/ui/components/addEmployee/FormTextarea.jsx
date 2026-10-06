const FormTextarea = ({
  label,
  placeholder,
  register,
  name,
  errors,
}) => {
  return (
    <div>

      <label className="block mb-3 text-sm font-semibold text-[var(--text-secondary)]">
        {label}
      </label>

      <textarea
        rows={5}
        placeholder={placeholder}
        {...register(name)}
      
        className="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] px-5 py-4 text-[var(--text-primary)] outline-none resize-none"
      />
      {errors?.[name] && (
        <p className="mt-2 text-sm text-red-500">{errors[name].message}</p>
      )}

    </div>
  );
};

export default FormTextarea;