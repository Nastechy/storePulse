import { BiGridAlt, BiBriefcaseAlt, BiCalendar, BiCog, BiPhone } from "react-icons/bi";
import { BsApp } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";

export const navigationLinks = [
  { path: "/", label: "Dashboard", icon: BiGridAlt },
  { path: "/projects", label: "Projects", icon: MdOutlineAssignment },
  { path: "/tasks", label: "Tasks", icon: BiBriefcaseAlt },
  { path: "/kaeban-desk", label: "Kaeban Desk", icon: BiBriefcaseAlt },
  { path: "/calendar", label: "Calendar", icon: BiCalendar },
  { path: "/contact", label: "Contact", icon: BiPhone },
  { path: "/all-apps", label: "All Apps", icon: BsApp },
];

export const latestprojectsLinks = [
  { path: "/ui-ux-inspiration", label: "UI/UX Inspiration", icon: BiBriefcaseAlt },
  {
    path: "/theme-development",
    label: "Theme Development",
    icon: BiCalendar,
  },
  { path: "/campaign-design", label: "Campaign Design", icon: BiCalendar },
  { path: "/content-creation", label: "Content Creation", icon: BiCalendar },
  { path: "/saas-template-design", label: "SaaS Template Design", icon: BiCalendar },
];

export const settingLinks = [
  { path: "/help-center", label: "Help Center", icon: BiCalendar },
  {
    path: "/settings",
    label: "Settings",
    icon: BiCog,
  },
];
