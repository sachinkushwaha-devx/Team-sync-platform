import Chat from '../../features/chat/ui/pages/Chat'
import Attendance from '../../features/employees module/Attendance/ui/pages/Attendance'
import MyTask from '../../features/employees module/MyTask/ui/pages/MyTask'
import Profile from '../../features/employees module/profile/ui/pages/Profile'
import Employee from '../../features/admin module/employees/ui/pages/Employee.jsx'

export let EmployeeRoutes = [
    {
        path: "employees",
        element: <Employee />,
    },
    {
        path: "my-task",
        element: <MyTask />,
    },
    {
        path: "chat",
        element: <Chat />,
    },
    {
        path: "profile",
        element: <Profile />,
    },
    {
        path: "attendance",
        element: <Attendance />
    },
];
