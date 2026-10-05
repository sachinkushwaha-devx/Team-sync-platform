const WorkspaceSection = ({ title }) => {
  return (
    <main className="min-h-screen bg-(--bg-main) p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-2 text-(--text-secondary)">
          This section is not set up yet.
        </p>
      </div>
    </main>
  );
};

export default WorkspaceSection;
