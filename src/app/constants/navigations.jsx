import {
  CalendarDays,
  LayoutDashboard,
  ListTodo,
  MessageCircle,
  Users,
  UserRound,
} from "lucide-react";

const sharedNavigation = [
  { path: "/home", title: "Dashboard", icon: LayoutDashboard },
  { path: "/home/my-task", title: "My Tasks", icon: ListTodo },
  { path: "/home/chat", title: "Chat", icon: MessageCircle },
  { path: "/home/attendance", title: "Attendance", icon: CalendarDays },
  { path: "/home/profile", title: "Profile", icon: UserRound },
];

export const adminNavigation = [
  sharedNavigation[0],
  { path: "/home/employees", title: "Employees", icon: Users },
  ...sharedNavigation.slice(1),
];
export const employeeNavigation = sharedNavigation; 