
import Attendance from '../../features/employees module/Attendance/ui/pages/Attendance'
import MyTask from '../../features/employees module/MyTask/ui/pages/MyTask'
import Profile from '../../features/employees module/profile/ui/pages/Profile'

export let EmployeeRoutes = [
 
 
    {
        path: "my-task",
        element: <MyTask />,
    },
 
    {
        path: "attendance",
        element: <Attendance />
    },

     
    {
        path: "profile",
        element: <Profile />,
    },

   
];
