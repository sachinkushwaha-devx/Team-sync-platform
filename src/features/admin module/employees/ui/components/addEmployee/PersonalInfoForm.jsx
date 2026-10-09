import { User } from "lucide-react";
import FormInput from "./FormInput";
import UploadPhoto from "./UploadPhoto";
import FormTextarea from "./FormTextarea";



const PersonalInfoForm = ({
  register,
  errors,
  setValue,
  watch,
}) => {
  return (
    <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-4 sm:p-6 lg:p-7">

      {/* TITLE */}
      <div className="flex items-center gap-3 pb-4 border-b border-[var(--border-color)]">

        <User
          size={22}
          className="text-[var(--brand-color)]"
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
          Personal Information
        </h2>

      </div>

      {/* CONTENT */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[12rem_minmax(0,1fr)] xl:gap-8">

        {/* IMAGE */}
        <UploadPhoto
          setValue={setValue}
          watch={watch}
        />

        {/* FORM */}
        <div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">

            <FormInput
              label="Full Name *"
              placeholder="e.g. Sarah Jenkins"
              register={register}
              name="name"
              errors={errors}
            />

            <FormInput
              label="Email Address *"
              placeholder="sarah@gmail.com"
              type="email"
              register={register}
              name="email"
              errors={errors}
            />

          </div>

          <div className="mt-5">
            <FormInput
              label="Temporary Password *"
              placeholder="Create a password for the employee"
              type="password"
              autoComplete="new-password"
              register={register}
              name="password"
              errors={errors}
              registerOptions={{
                required: "A password is required so the employee can sign in",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              }}
            />
            <p className="mt-2 text-xs text-[var(--text-secondary)] sm:text-sm">
              Share this temporary password with the employee securely.
            </p>
          </div>

          <div className="mt-5">

            <FormTextarea
              label="Bio / About"
              placeholder="Tell us about employee..."
              register={register}
              name="bio"
              errors={errors}
            />

          </div>

        </div>

      </div>
    </div>
  );
};

export default PersonalInfoForm;