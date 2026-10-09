const FormTextarea = ({
  label,
  placeholder,
  register,
  name,
  errors,
}) => {
  return (
    <div>

      <label className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
        {label}
      </label>

      <textarea
        rows={4}
        placeholder={placeholder}
        {...register(name)}
      
        className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none resize-y"
      />
      {errors?.[name] && (
        <p className="mt-2 text-sm text-red-500">{errors[name].message}</p>
      )}

    </div>
  );
};

export default FormTextarea;