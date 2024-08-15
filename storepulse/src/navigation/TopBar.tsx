
import { BiBell } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import { LiaNewspaper } from "react-icons/lia";
import { MdOutlineShortText } from "react-icons/md";
import SearchBar from "../components/SearchBar";
import { FcManager } from "react-icons/fc";


const Topbar = () => {
    return (
        <nav className="fixed z-50 flex items-center justify-between w-full h-[70px] px-4 py-6 bg-[#F9F8FE] border-b">
            <div className="flex items-center justify-center gap-4">
                <div className="text-black text-[20px]">
                    <MdOutlineShortText />
                </div>
                <h1 className=" text-[20px] text-[#38373D] font-medium capitalize">Dashboard</h1>
            </div>
            <div className="flex items-center mr-[260px] gap-20 text-white ">
                <div>
                    <SearchBar />
                </div>
                <div className="flex gap-6 items-center justify-center">
                    <div className="text-[#BCCDD9]"><BiBell /></div>
                    <div className="text-[#BCCDD9]"><CgAddR /></div>
                    <div className="text-[#BCCDD9]"><LiaNewspaper /></div>
                    <div className="text-[40px] h-10 w-10 border border-[#BCCDD9] rounded-full flex items-center justify-center">
                        <FcManager />
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Topbar;
