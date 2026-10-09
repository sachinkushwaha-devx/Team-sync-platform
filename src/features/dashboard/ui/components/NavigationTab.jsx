import { NavLink } from "react-router-dom";

const NavigationTab = ({ path, title, Icon }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex min-w-fit items-center gap-2 whitespace-nowrap rounded-lg border-b-2 border-transparent px-3 py-2 text-sm lg:gap-3 lg:rounded-none lg:border-b-0 lg:border-r-4 lg:pl-4 ${
          isActive
            ? "border-(--primary) bg-(--secondary) lg:border-r-(--primary)"
            : ""
        }`
      }
      to={path}
      end={path === "/home"}
    >
      <Icon size={20} />
      {title}
    </NavLink>
  );
};

export default NavigationTab;