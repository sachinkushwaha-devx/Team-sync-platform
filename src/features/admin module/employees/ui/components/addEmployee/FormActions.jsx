import { UserPlus } from "lucide-react";

const FormActions = ({ isSubmitting = false }) => {
  return (
    <div className="mt-6 flex flex-col-reverse gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-end">

      <button
        type="button"
        className="h-11 rounded-xl border border-[var(--border-color)] px-5 text-sm"
      >
        Cancel
      </button>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 text-sm text-white"
      >
        <UserPlus size={18} />

        {isSubmitting ? "Saving..." : "Save Employee"}
      </button>

    </div>
  );
};

export default FormActions;