import NavigationTab from "./NavigationTab";
import { useSelector } from "react-redux";
import {
  adminNavigation,
  employeeNavigation,
} from "../../../../app/constants/navigations";
import { getEmployeeRole } from "../../../auth/ui/hooks/state/auth/authHelpers";

const AsideNav = () => {
  let { employee } = useSelector((store) => store.auth);

  let isAdmin = getEmployeeRole(employee) === "admin";
  let navigations = isAdmin ? adminNavigation : employeeNavigation;

  return (
    <div>
      <div className="flex flex-col gap-1 p-4">
        <h1 className="whitespace-nowrap text-3xl font-semibold text-[#CAB8F9]">team-sync</h1>
        <p className="whitespace-nowrap text-sm text-(--text-secondary)">
          Enterprise workspace
        </p>
      </div>

      <div className="flex flex-col gap-3">
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
      </div>
    </div>
  );
};

export default AsideNav;