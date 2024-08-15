
import { NavLink } from 'react-router-dom'
import { BiArrowToTop } from 'react-icons/bi'

const SidebarMenu = ({ links, title }: { links: any, pathname: string, title?: string }) => {
    return (
        <> <aside className="pb-5 ">
            <h4 className="px-2 my-2 text-sm text-[#A2ABB8]">{title}</h4>
            <nav className="flex flex-col items-start justify-center space-y-1 ">
                {links.map(({ path, label, icon: Icon, sub }: { path: string, label: string, icon: any, sub: any }) => (
                    <div key={path} className="w-full h-full">
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                ` w-full p-2 transition-all rounded-lg cursor-pointer flex items-center text-[14px] font-[600] text-[#2c2c2d]  ${isActive ? "bg-{primary} text-[black]" : "hover:text-[#8AA8FC] hover:bg-[#FAF9FC]"}`
                            }
                        >
                            <Icon className="mr-2 size-4 text-[#808D9D] hover:text-[#8AA8FC]" />
                            {label}
                            {sub && (<BiArrowToTop className="ml-auto size-2" />)}
                        </NavLink>
                    </div>
                ))}
            </nav>
        </aside></>
    )
}

export default SidebarMenu