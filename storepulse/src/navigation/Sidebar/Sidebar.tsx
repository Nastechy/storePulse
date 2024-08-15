
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SidebarMenu from "./SidebarMenu";
import { navigationLinks, latestprojectsLinks, settingLinks } from "../../data/links";

const Sidebar = () => {

    const { pathname } = useLocation();
    useEffect(() => {
        const elements = document.querySelectorAll('.animated-appearance');
        elements.forEach(el => {
            setTimeout(() => {
                el.classList.add('show');
            }, 100);
        });
    }, [pathname]);

    return (
        <>
        <div className=" h-[69px] border-b flex items-center font-[800]">
            <div className="ml-5">STOREPULSE</div>
        </div>
            <div className="z-30 flex flex-col justify-between w-70 mt-4 px-4 bg-white">
                <SidebarMenu links={navigationLinks} title="Navigation" pathname={pathname} />
                <SidebarMenu links={latestprojectsLinks} title="Latest Projects" pathname={pathname} />
                <div className="mt-10">
                    <SidebarMenu links={settingLinks} pathname={pathname} />

                </div>
            </div>
        </>
    );
};

export default Sidebar;