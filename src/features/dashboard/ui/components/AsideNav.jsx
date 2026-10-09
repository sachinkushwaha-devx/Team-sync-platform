import NavigationTab from "./NavigationTab";
import { useSelector } from "react-redux";
import {
  adminNavigation,
  employeeNavigation,
} from "../../../../app/constants/navigations";
import { getEmployeeRole } from "../../../auth/ui/hooks/state/auth/authHelpers";

const AsideNav = () => {
  let { employee } = useSelector((store) => store.auth);
  let { mode } = useSelector((store) => store.theme);

  let isAdmin = getEmployeeRole(employee) === "admin";
  let navigations = isAdmin ? adminNavigation : employeeNavigation;

  return (
    <div className="flex min-w-0 flex-col gap-2 lg:gap-4">
      <div className="flex items-center justify-between gap-4 px-2 py-1 sm:px-4 lg:block lg:py-0">
        <div className="flex items-center gap-2.5">
          <img
            src="/team-sync-logo.svg"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
          />
          <h1 className={`whitespace-nowrap text-2xl font-semibold lg:text-3xl ${mode === "light" ? "text-(--text-primary)" : "text-[#CAB8F9]"}`}>Team-sync</h1>
        </div>
        <p className="hidden whitespace-nowrap text-sm text-(--text-secondary) lg:block">
          Enterprise workspace
        </p>
      </div>

      <nav aria-label="Main navigation" className="flex min-w-0 gap-1 overflow-x-auto lg:flex-col lg:gap-3 lg:overflow-visible">
        {navigations.map((route) => {
          return (
            <NavigationTab
              key={route.path}
              path={route.path}
              Icon={route.icon}
              title={route.title}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default AsideNav;