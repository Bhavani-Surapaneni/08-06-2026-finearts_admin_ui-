




// import { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";

// import {
//   HiOutlineHome,
//   HiOutlineViewGrid,
//   HiOutlineCollection,
//   HiOutlineAcademicCap,
//   HiOutlineUserGroup,
//   HiOutlineOfficeBuilding,
//   HiOutlineCalendar,
//   HiOutlineUsers,
//   HiOutlineMenuAlt2,
//   HiX,
//   HiOutlineChatAlt,
//   HiChevronDown,
//   HiChevronRight,
// } from "react-icons/hi";

// import { useSidebar } from "../../context/SidebarContext";

// /* =========================
//    ADMIN MENU
// ========================= */
// const adminMenuItems = [
//   {
//     path: "/dashboard",
//     icon: HiOutlineHome,
//     label: "Dashboard",
//   },
//   {
//     path: "/categories",
//     icon: HiOutlineViewGrid,
//     label: "Categories",
//   },
//   {
//     path: "/subcategories",
//     icon: HiOutlineCollection,
//     label: "Subcategories",
//   },
//   {
//     path: "/classes",
//     icon: HiOutlineAcademicCap,
//     label: "Classes",
//   },
//   {
//     path: "/trainers",
//     icon: HiOutlineUserGroup,
//     label: "Trainers",
//   },
//   {
//     label: "Institutes",
//     icon: HiOutlineOfficeBuilding,
//     children: [
//       {
//         path: "/institutes",
//         label: "All Institutes",
//       },
//       {
//         path: "/institutes/pending",
//         label: "Pending Institutes",
//       },
     
//       {
//         path: "/institutes/rejected",
//         label: "Rejected Institutes",
//       },
//     ],
//   },
//   {
//     path: "/bookings",
//     icon: HiOutlineCalendar,
//     label: "Bookings",
//   },
//   {
//     path: "/students",
//     icon: HiOutlineUsers,
//     label: "Students",
//   },
//   {
//     path: "/testimonials",
//     icon: HiOutlineChatAlt,
//     label: "Testimonials",
//   },
// ];

// /* =========================
//    INSTITUTE MENU
// ========================= */
// const instituteMenuItems = [
//   {
//     path: "/institute/dashboard",
//     icon: HiOutlineHome,
//     label: "Dashboard",
//   },

//   {
//     path: "/institute/classes",
//     icon: HiOutlineAcademicCap,
//     label: "Classes",
//   },

//   {
//     label: "Trainers",
//     icon: HiOutlineUserGroup,
//     children: [
//       {
//         path: "/institute/trainers",
//         label: "All Trainers",
//       },
//       {
//         path: "/institute/trainers/pending",
//         label: "Pending Trainers",
//       },
//       {
//         path: "/institute/trainers/rejected",
//         label: "Rejected Trainers",
//       },
//     ],
//   },

//   {
//     path: "/institute/students",
//     icon: HiOutlineUsers,
//     label: "Students",
//   },

//   {
//     path: "/institute/bookings",
//     icon: HiOutlineCalendar,
//     label: "Bookings",
//   },

//   {
//     path: "/institute/profile",
//     icon: HiOutlineOfficeBuilding,
//     label: "Institute Profile",
//   },
// ];
    
// /* =========================
//    TRAINER MENU
// ========================= */
// const trainerMenuItems = [
//   {
//     path: "/trainer/dashboard",
//     icon: HiOutlineHome,
//     label: "Dashboard",
//   },
//   {
//     path: "/trainer/classes",
//     icon: HiOutlineAcademicCap,
//     label: "My Classes",
//   },
//   {
//     path: "/trainer/bookings",
//     icon: HiOutlineCalendar,
//     label: "Bookings",
//   },
//   {
//     path: "/trainer/students",
//     icon: HiOutlineUsers,
//     label: "Students",
//   },
//   {
//     path: "/trainer/profile",
//     icon: HiOutlineUserGroup,
//     label: "Profile",
//   },
// ];


// export default function Sidebar({
//   role = "ADMIN",
// }) {
//   const location = useLocation();

//   const {
//     isSidebarOpen,
//     toggleSidebar,
//     toggleMobileSidebar,
//   } = useSidebar();

// const [openMenus, setOpenMenus] = useState({
//   institutes: true,
//   trainers: true,
// });



// const menuItems =
//   role === "INSTITUTE"
//     ? instituteMenuItems
//     : role === "TRAINER"
//     ? trainerMenuItems
//     : adminMenuItems;

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   return (
//     <div
//       className={`h-screen overflow-y-auto flex flex-col glass-effect ${
//         isSidebarOpen ? "px-4" : "px-2"
//       } py-6`}
//     >
//       {/* Logo */}
//       <div className="flex items-center justify-between mb-8 px-2">
//         {isSidebarOpen ? (
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">
//                 DP
//               </span>
//             </div>
 
           

// <span className="text-lg font-bold gradient-text">
//   {role === "INSTITUTE"
//     ? "Institute"
//     : role === "TRAINER"
//     ? "Trainer"
//     : "Admin"}
// </span>




//           </div>
//         ) : (
//           <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mx-auto">
//             <span className="text-white font-bold text-lg">
//               DP
//             </span>
//           </div>
//         )}

//         <button
//           onClick={toggleMobileSidebar}
//           className="lg:hidden p-2 rounded-lg hover:bg-white/10"
//         >
//           <HiX className="w-5 h-5" />
//         </button>

//         <button
//           onClick={toggleSidebar}
//           className="hidden lg:block p-2 rounded-lg hover:bg-white/10"
//         >
//           <HiOutlineMenuAlt2 className="w-5 h-5" />
//         </button>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 space-y-1">
//         {menuItems.map((item) => {
//           const Icon = item.icon;

//           /* Dropdown */
         

//           if (item.children) {
//   const menuKey =
//     item.label.toLowerCase();

//   const isOpen =
//     openMenus[menuKey];

//   return (
//     <div key={item.label}>
//       <button
//         onClick={() =>
//           setOpenMenus((prev) => ({
//             ...prev,
//             [menuKey]: !prev[menuKey],
//           }))
//         }
//         className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5"
//       >
//         <div className="flex items-center gap-3">
//           <Icon className="w-5 h-5" />

//           {isSidebarOpen && (
//             <span className="font-medium text-sm">
//               {item.label}
//             </span>
//           )}
//         </div>

//         {isSidebarOpen &&
//           (isOpen ? (
//             <HiChevronDown />
//           ) : (
//             <HiChevronRight />
//           ))}
//       </button>

//       {isOpen && isSidebarOpen && (
//         <div className="ml-8 mt-1 space-y-1">
//           {item.children.map(
//             (child) => (
//               <NavLink
//                 key={child.path}
//                 to={child.path}
//                 className={({
//                   isActive,
//                 }) =>
//                   `block px-3 py-2 rounded-lg text-sm ${
//                     isActive
//                       ? "bg-purple-600 text-white"
//                       : "text-gray-400 hover:bg-white/5 hover:text-white"
//                   }`
//                 }
//               >
//                 {child.label}
//               </NavLink>
//             )
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

//       {/* Logout */}
//       <button
//         onClick={handleLogout}
//         className="w-full mt-4 px-3 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all text-sm font-semibold flex items-center justify-center gap-2"
//       >
//         <HiX className="w-4 h-4" />
//         Logout
//       </button>
//     </div>
//   );
// }

import { useState } from "react";
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
HiOutlineMenuAlt2,
HiOutlineChatAlt,
HiChevronDown,
HiChevronRight,
HiX,
} from "react-icons/hi";

import { useSidebar } from "../../context/SidebarContext";

/* =========================
ADMIN MENU
========================= */
const adminMenuItems = [
{
path: "/dashboard",
icon: HiOutlineHome,
label: "Dashboard",
},
{
path: "/categories",
icon: HiOutlineViewGrid,
label: "Categories",
},
{
path: "/subcategories",
icon: HiOutlineCollection,
label: "Subcategories",
},
{
path: "/classes",
icon: HiOutlineAcademicCap,
label: "Classes",
},
{
path: "/trainers",
icon: HiOutlineUserGroup,
label: "Trainers",
},
{
label: "Institutes",
icon: HiOutlineOfficeBuilding,
children: [
{
path: "/institutes",
label: "All Institutes",
},
{
path: "/institutes/pending",
label: "Pending Institutes",
},
{
path: "/institutes/rejected",
label: "Rejected Institutes",
},
],
},
{
path: "/bookings",
icon: HiOutlineCalendar,
label: "Bookings",
},
{
path: "/students",
icon: HiOutlineUsers,
label: "Students",
},
{
path: "/testimonials",
icon: HiOutlineChatAlt,
label: "Testimonials",
},
];

/* =========================
INSTITUTE MENU
========================= */
const instituteMenuItems = [
{
path: "/institute/dashboard",
icon: HiOutlineHome,
label: "Dashboard",
},
{
path: "/institute/classes",
icon: HiOutlineAcademicCap,
label: "Classes",
},
{
label: "Trainers",
icon: HiOutlineUserGroup,
children: [
{
path: "/institute/trainers",
label: "All Trainers",
},
{
path: "/institute/trainers/pending",
label: "Pending Trainers",
},
{
path: "/institute/trainers/rejected",
label: "Rejected Trainers",
},
],
},
{
path: "/institute/students",
icon: HiOutlineUsers,
label: "Students",
},
{
path: "/institute/bookings",
icon: HiOutlineCalendar,
label: "Bookings",
},
{
path: "/institute/profile",
icon: HiOutlineOfficeBuilding,
label: "Institute Profile",
},
];

/* =========================
TRAINER MENU
========================= */
const trainerMenuItems = [
{
path: "/trainer/dashboard",
icon: HiOutlineHome,
label: "Dashboard",
},
{
path: "/trainer/classes",
icon: HiOutlineAcademicCap,
label: "My Classes",
},
{
path: "/trainer/bookings",
icon: HiOutlineCalendar,
label: "Bookings",
},
{
path: "/trainer/students",
icon: HiOutlineUsers,
label: "Students",
},
{
path: "/trainer/profile",
icon: HiOutlineUserGroup,
label: "Profile",
},
];

export default function Sidebar({
role = "ADMIN",
}) {
const location = useLocation();

const {
isSidebarOpen,
toggleSidebar,
toggleMobileSidebar,
} = useSidebar();

const [openMenus, setOpenMenus] =
useState({
institutes: true,
trainers: true,
});

const menuItems =
role === "INSTITUTE"
? instituteMenuItems
: role === "TRAINER"
? trainerMenuItems
: adminMenuItems;

const handleLogout = () => {
localStorage.clear();
window.location.href = "/";
};

return (
<div
className={`h-screen overflow-y-auto flex flex-col glass-effect ${
        isSidebarOpen ? "px-4" : "px-2"
      } py-6`}
>
{/* LOGO */} <div className="flex items-center justify-between mb-8 px-2">
{isSidebarOpen ? ( <div className="flex items-center gap-3"> <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center"> <span className="text-white font-bold text-lg">
DP </span> </div>


        <span className="text-lg font-bold gradient-text">
          {role === "INSTITUTE"
            ? "Institute"
            : role === "TRAINER"
            ? "Trainer"
            : "Admin"}
        </span>
      </div>
    ) : (
      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mx-auto">
        <span className="text-white font-bold text-lg">
          DP
        </span>
      </div>
    )}

    <button
      onClick={toggleMobileSidebar}
      className="lg:hidden p-2 rounded-lg hover:bg-white/10"
    >
      <HiX className="w-5 h-5" />
    </button>

    <button
      onClick={toggleSidebar}
      className="hidden lg:block p-2 rounded-lg hover:bg-white/10"
    >
      <HiOutlineMenuAlt2 className="w-5 h-5" />
    </button>
  </div>

  {/* MENU */}
  <nav className="flex-1 space-y-1">
    {menuItems.map((item) => {
      const Icon = item.icon;

      if (item.children) {
        const menuKey =
          item.label.toLowerCase();

        const isOpen =
          openMenus[menuKey];

        return (
          <div key={item.label}>
            <button
              onClick={() =>
                setOpenMenus((prev) => ({
                  ...prev,
                  [menuKey]:
                    !prev[menuKey],
                }))
              }
              className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" />

                {isSidebarOpen && (
                  <span className="font-medium text-sm">
                    {item.label}
                  </span>
                )}
              </div>

              {isSidebarOpen &&
                (isOpen ? (
                  <HiChevronDown />
                ) : (
                  <HiChevronRight />
                ))}
            </button>

            {isOpen &&
              isSidebarOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.children.map(
                    (child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({
                          isActive,
                        }) =>
                          `block px-3 py-2 rounded-lg text-sm ${
                            isActive
                              ? "bg-purple-600 text-white"
                              : "text-gray-400 hover:bg-white/5 hover:text-white"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    )
                  )}
                </div>
              )}
          </div>
        );
      }

      const isActive =
        location.pathname ===
        item.path;

      return (
        <NavLink
          key={item.path}
          to={item.path}
          className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
            isActive
              ? "gradient-bg text-white shadow-lg shadow-purple-500/25"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Icon
            className={`w-5 h-5 ${
              isActive
                ? "text-white"
                : "group-hover:text-neon-pink"
            }`}
          />

          {isSidebarOpen && (
            <span className="font-medium text-sm">
              {item.label}
            </span>
          )}
        </NavLink>
      );
    })}
  </nav>

  {/* LOGOUT */}
  <button
    onClick={handleLogout}
    className="w-full mt-4 px-3 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all text-sm font-semibold flex items-center justify-center gap-2"
  >
    <HiX className="w-4 h-4" />
    Logout
  </button>
</div>


);
}
