const StatCard = ({
    title,
    value,
    icon,
    badge,
  }) => {
    return (
      <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl p-4 sm:p-5">
        <div className="flex items-center justify-between">
  
          <div className="w-11 h-11 rounded-xl bg-indigo-100 text-[var(--primary)] flex items-center justify-center">
            {icon}
          </div>
  
          <span className="text-sm font-semibold text-[var(--text-secondary)]">
            {badge}
          </span>
  
        </div>
  
        <div className="mt-4">
  
          <p className="text-sm text-[var(--text-secondary)]">
            {title}
          </p>
  
          <h2 className="text-3xl font-bold mt-1 text-[var(--text-primary)]">
            {value}
          </h2>
  
        </div>
      </div>
    );
  };
  
  export default StatCard;