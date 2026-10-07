
import Chat from "../../features/chat/ui/pages/Chat";
import Setting from "../../features/settings/ui/pages/Setting";

export let commonRoutes = [
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
];