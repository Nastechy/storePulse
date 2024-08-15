

import Sidebar from "../navigation/Sidebar/Sidebar";
import Topbar from "../navigation/TopBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="w-[250px] border ">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 h-full p-5 overflow-y-auto bg-white mt-[70px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;


