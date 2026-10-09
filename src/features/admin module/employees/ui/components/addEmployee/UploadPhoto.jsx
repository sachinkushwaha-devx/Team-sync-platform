import { Camera, Pencil } from "lucide-react";

const UploadPhoto = () => {
  return (
    <div>

      <div className="relative flex h-36 w-36 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[var(--border-color)] bg-[var(--bg-main)] sm:h-40 sm:w-40">

        <Camera
          size={32}
          className="text-[var(--text-muted)]"
        />

        <p className="mt-3 text-sm text-[var(--text-secondary)] font-medium">
          Upload Photo
        </p>

        <button
          className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] text-white"
        >
          <Pencil size={18} />
        </button>

      </div>

      <p className="mt-5 text-sm font-medium text-[var(--text-secondary)]">
        JPG or PNG. Max size of 800K.
      </p>

    </div>
  );
};

export default UploadPhoto;