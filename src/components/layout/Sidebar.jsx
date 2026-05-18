import { NavLink, useLocation } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineViewGrid,
  HiOutlineCollection,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineOfficeBuilding,
  HiOutlineCalendar,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineMenuAlt2,
  HiX,
} from "react-icons/hi";
import { useSidebar } from "../../context/SidebarContext";

const menuItems = [
  { path: "/", icon: HiOutlineHome, label: "Dashboard" },
  { path: "/categories", icon: HiOutlineViewGrid, label: "Categories" },
  { path: "/subcategories", icon: HiOutlineCollection, label: "Subcategories" },
  { path: "/classes", icon: HiOutlineAcademicCap, label: "Classes" },
  { path: "/trainers", icon: HiOutlineUserGroup, label: "Trainers" },
  { path: "/institutes", icon: HiOutlineOfficeBuilding, label: "Institutes" },
  { path: "/bookings", icon: HiOutlineCalendar, label: "Bookings" },
  { path: "/students", icon: HiOutlineUsers, label: "Students" },
  { path: "/analytics", icon: HiOutlineChartBar, label: "Analytics" },
  { path: "/settings", icon: HiOutlineCog, label: "Settings" },
];

export default function Sidebar() {
  const location = useLocation();
  const {
    isSidebarOpen,
    toggleSidebar,
    isMobileSidebarOpen,
    toggleMobileSidebar,
  } = useSidebar();

  return (
    <div
      className={`h-full flex flex-col glass-effect ${isSidebarOpen ? "px-4" : "px-2"} py-6`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between mb-8 px-2">
        {isSidebarOpen && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DP</span>
            </div>
            <span className="text-lg font-bold gradient-text">Admin</span>
          </div>
        )}
        {!isSidebarOpen && (
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-lg">DP</span>
          </div>
        )}

        {/* Mobile Close Button */}
        <button
          onClick={toggleMobileSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <HiX className="w-5 h-5" />
        </button>

        {/* Desktop Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="hidden lg:block p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <HiOutlineMenuAlt2 className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "gradient-bg text-white shadow-lg shadow-purple-500/25"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  toggleMobileSidebar();
                }
              }}
            >
              <Icon
                className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "group-hover:text-neon-pink"}`}
              />
              {isSidebarOpen && (
                <span className="font-medium text-sm">{item.label}</span>
              )}

              {/* Active Indicator */}
              {isActive && !isSidebarOpen && (
                <div className="absolute left-0 w-1 h-8 bg-gradient-to-b from-primary-purple to-neon-pink rounded-r-full" />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Profile Section */}
      {isSidebarOpen && (
        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-3">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-white font-semibold text-sm">SA</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Super Admin</p>
              <p className="text-xs text-gray-400 truncate">
                admin@danceplatform.com
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
