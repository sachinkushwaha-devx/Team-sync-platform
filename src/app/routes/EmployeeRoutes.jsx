import React from 'react'
import Chat from '../../features/chat/ui/pages/Chat'
import Attendance from '../../features/employees module/Attendance/pages/Attendance'

export let EmployeeRoutes = [
    {
        path: "my-task",
        element: <Chat />,
    },
    {
        path: "attendance",
        element: <Attendance />

    }
]
