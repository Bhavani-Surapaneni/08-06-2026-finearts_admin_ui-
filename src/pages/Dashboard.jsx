// import { useSelector } from "react-redux";
// import {
//   HiUsers,
//   HiUserGroup,
//   HiCalendar,
//   HiCurrencyDollar,
//   HiAcademicCap,
//   HiTrendingUp,
//   HiClock,
// } from "react-icons/hi";
// import StatCard from "../components/ui/StatCard";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// export default function Dashboard() {
//   const {
//     stats,
//     recentActivity,
//     monthlyRevenue,
//     bookingGrowth,
//     popularCategories,
//   } = useSelector((state) => state.dashboard);

//   const statCards = [
//     {
//       title: "Total Students",
//       value: stats.totalStudents.toLocaleString(),
//       change: "+12.5%",
//       changeType: "positive",
//       icon: HiUsers,
//       color: "purple",
//     },
//     {
//       title: "Total Trainers",
//       value: stats.totalTrainers,
//       change: "+8.2%",
//       changeType: "positive",
//       icon: HiUserGroup,
//       color: "pink",
//     },
//     {
//       title: "Total Bookings",
//       value: stats.totalBookings.toLocaleString(),
//       change: "+23.1%",
//       changeType: "positive",
//       icon: HiCalendar,
//       color: "gold",
//     },
//     {
//       title: "Revenue",
//       value: `$${stats.revenue.toLocaleString()}`,
//       change: "+18.7%",
//       changeType: "positive",
//       icon: HiCurrencyDollar,
//       color: "green",
//     },
//     {
//       title: "Active Classes",
//       value: stats.activeClasses,
//       change: "+5.4%",
//       changeType: "positive",
//       icon: HiAcademicCap,
//       color: "blue",
//     },
//   ];

//   const COLORS = ["#a842df", "#ee68e0", "#f4b16a", "#10b981", "#3b82f6"];

//   return (
//     <div className="space-y-6 animate-slide-up">
//       {/* Page Header */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>
//         <p className="text-gray-400 mt-1">
//           Welcome back! Here's what's happening today.
//         </p>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//         {statCards.map((stat, index) => (
//           <StatCard key={index} {...stat} />
//         ))}
//       </div>

//       {/* Charts Row */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Revenue Chart */}
//         <div className="glass-effect rounded-2xl p-6 border border-white/10">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="text-lg font-bold">Monthly Revenue</h3>
//               <p className="text-sm text-gray-400">
//                 Revenue over the past year
//               </p>
//             </div>
//             <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
//               <HiTrendingUp className="w-4 h-4" />
//               +18.7%
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <AreaChart data={monthlyRevenue}>
//               <defs>
//                 <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#a842df" stopOpacity={0.3} />
//                   <stop offset="95%" stopColor="#a842df" stopOpacity={0} />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 stroke="rgba(255,255,255,0.05)"
//               />
//               <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
//               <YAxis
//                 stroke="#9ca3af"
//                 fontSize={12}
//                 tickFormatter={(value) => `$${value / 1000}k`}
//               />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "#2f1d31",
//                   border: "1px solid rgba(168, 66, 223, 0.3)",
//                   borderRadius: "12px",
//                   color: "#fff",
//                 }}
//               />
//               <Area
//                 type="monotone"
//                 dataKey="revenue"
//                 stroke="#a842df"
//                 strokeWidth={2}
//                 fill="url(#colorRevenue)"
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Booking Growth Chart */}
//         <div className="glass-effect rounded-2xl p-6 border border-white/10">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="text-lg font-bold">Booking Growth</h3>
//               <p className="text-sm text-gray-400">Monthly booking trends</p>
//             </div>
//             <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
//               <HiTrendingUp className="w-4 h-4" />
//               +23.1%
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={bookingGrowth}>
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 stroke="rgba(255,255,255,0.05)"
//               />
//               <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
//               <YAxis stroke="#9ca3af" fontSize={12} />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "#2f1d31",
//                   border: "1px solid rgba(238, 104, 224, 0.3)",
//                   borderRadius: "12px",
//                   color: "#fff",
//                 }}
//               />
//               <Bar dataKey="bookings" fill="#ee68e0" radius={[4, 4, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Bottom Row */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Popular Categories */}
//         <div className="glass-effect rounded-2xl p-6 border border-white/10">
//           <h3 className="text-lg font-bold mb-6">Popular Categories</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={popularCategories}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={60}
//                 outerRadius={100}
//                 paddingAngle={5}
//                 dataKey="count"
//               >
//                 {popularCategories.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "#2f1d31",
//                   border: "1px solid rgba(168, 66, 223, 0.3)",
//                   borderRadius: "12px",
//                   color: "#fff",
//                 }}
//               />
//             </PieChart>
//           </ResponsiveContainer>
//           <div className="mt-4 space-y-2">
//             {popularCategories.map((cat, index) => (
//               <div
//                 key={cat.name}
//                 className="flex items-center justify-between text-sm"
//               >
//                 <div className="flex items-center gap-2">
//                   <div
//                     className="w-3 h-3 rounded-full"
//                     style={{ backgroundColor: COLORS[index] }}
//                   />
//                   <span>{cat.name}</span>
//                 </div>
//                 <span className="text-gray-400">{cat.percentage}%</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="lg:col-span-2 glass-effect rounded-2xl p-6 border border-white/10">
//           <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
//           <div className="space-y-4">
//             {recentActivity.map((activity) => (
//               <div
//                 key={activity.id}
//                 className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
//               >
//                 <div
//                   className={`p-2 rounded-lg mt-0.5 ${
//                     activity.type === "booking"
//                       ? "bg-blue-500/20 text-blue-400"
//                       : activity.type === "student"
//                         ? "bg-green-500/20 text-green-400"
//                         : activity.type === "payment"
//                           ? "bg-yellow-500/20 text-yellow-400"
//                           : activity.type === "review"
//                             ? "bg-purple-500/20 text-purple-400"
//                             : "bg-pink-500/20 text-pink-400"
//                   }`}
//                 >
//                   {activity.type === "booking" && (
//                     <HiCalendar className="w-4 h-4" />
//                   )}
//                   {activity.type === "student" && (
//                     <HiUsers className="w-4 h-4" />
//                   )}
//                   {activity.type === "payment" && (
//                     <HiCurrencyDollar className="w-4 h-4" />
//                   )}
//                   {activity.type === "review" && (
//                     <HiAcademicCap className="w-4 h-4" />
//                   )}
//                   {activity.type === "trainer" && (
//                     <HiUserGroup className="w-4 h-4" />
//                   )}
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <p className="text-sm font-medium">{activity.message}</p>
//                   <p className="text-xs text-gray-400 mt-0.5">
//                     by {activity.user}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-1 text-xs text-gray-500 whitespace-nowrap">
//                   <HiClock className="w-3.5 h-3.5" />
//                   {activity.time}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// import {
//   HiUsers,
//   HiUserGroup,
//   HiCalendar,
//   HiCurrencyDollar,
//   HiAcademicCap,
//   HiTrendingUp,
// } from "react-icons/hi";

// import StatCard from "../components/ui/StatCard";

// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// import axios from "axios";
// import toast from "react-hot-toast";

// const API_URL = "http://localhost:5000/api/dashboard";

// export default function Dashboard() {

//   const [loading, setLoading] = useState(true);

//   const [stats, setStats] = useState({
//     total_users: 0,
//     total_trainers: 0,
//     total_institutes: 0,
//     total_classes: 0,
//     total_bookings: 0,
//     total_revenue: 0,
//   });

//   const [revenueData, setRevenueData] = useState([]);
//   const [bookingSummary, setBookingSummary] = useState([]);
//   const [usersSummary, setUsersSummary] = useState([]);

//   /* ─────────────────────────────────────────────
//      GET ADMIN TOKEN
//   ───────────────────────────────────────────── */
//   const getConfig = () => {

//     const token = localStorage.getItem("token");

//     return {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//   };

//   /* ─────────────────────────────────────────────
//      FETCH DASHBOARD
//   ───────────────────────────────────────────── */
//   const fetchDashboard = async () => {
//     try {

//       setLoading(true);

//       const config = getConfig();

//       const [
//         dashboardRes,
//         revenueRes,
//         bookingRes,
//         usersRes,
//       ] = await Promise.all([
//         axios.get(`${API_URL}/admin`, config),
//         axios.get(`${API_URL}/admin/revenue`, config),
//         axios.get(`${API_URL}/admin/bookings-summary`, config),
//         axios.get(`${API_URL}/admin/users-summary`, config),
//       ]);

//       setStats(dashboardRes.data.data);

//       setRevenueData(revenueRes.data.data || []);

//       setBookingSummary(bookingRes.data.data || []);

//       setUsersSummary(usersRes.data.data || []);

//     } catch (error) {

//       console.log(error);

//       toast.error(
//         error?.response?.data?.message ||
//         "Failed to load dashboard"
//       );

//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   /* ─────────────────────────────────────────────
//      STAT CARDS
//   ───────────────────────────────────────────── */
//   const statCards = [
//     {
//       title: "Total Users",
//       value: stats.total_users || 0,
//       icon: HiUsers,
//       color: "purple",
//     },
//     {
//       title: "Total Trainers",
//       value: stats.total_trainers || 0,
//       icon: HiUserGroup,
//       color: "pink",
//     },
//     {
//       title: "Total Bookings",
//       value: stats.total_bookings || 0,
//       icon: HiCalendar,
//       color: "gold",
//     },
//     {
//       title: "Revenue",
//       value: `₹${stats.total_revenue || 0}`,
//       icon: HiCurrencyDollar,
//       color: "green",
//     },
//     {
//       title: "Active Classes",
//       value: stats.total_classes || 0,
//       icon: HiAcademicCap,
//       color: "blue",
//     },
//   ];

//   const COLORS = [
//     "#a842df",
//     "#ee68e0",
//     "#f4b16a",
//     "#10b981",
//     "#3b82f6",
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Dashboard
//         </h1>

//         <p className="text-gray-400 mt-1">
//           Welcome back Admin
//         </p>
//       </div>





// import { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// import {
//   HiUsers,
//   HiUserGroup,
//   HiCalendar,
//   HiCurrencyDollar,
//   HiAcademicCap,
// } from "react-icons/hi";

// import StatCard from "../components/ui/StatCard";

// const API_URL = "http://localhost:5000/api/dashboard";

// export default function Dashboard() {
//   const [loading, setLoading] = useState(true);

//   const [stats, setStats] = useState({
//     total_users: 0,
//     total_trainers: 0,
//     total_institutes: 0,
//     total_classes: 0,
//     total_bookings: 0,
//     total_revenue: 0,
//   });

//   const [revenueData, setRevenueData] = useState([]);
//   const [bookingSummary, setBookingSummary] = useState([]);
//   const [usersSummary, setUsersSummary] = useState([]);

//   /* ───────────────────────────────
//      AUTH CONFIG
//   ─────────────────────────────── */
//   const getConfig = () => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       throw new Error("Authentication token missing");
//     }

//     return {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//   };

//   /* ───────────────────────────────
//      FETCH DASHBOARD DATA
//   ─────────────────────────────── */
//   const fetchDashboard = async () => {
//     try {
//       setLoading(true);

//       const config = getConfig();

//       const [
//         dashboardRes,
//         revenueRes,
//         bookingRes,
//         usersRes,
//       ] = await Promise.allSettled([
//         axios.get(`${API_URL}/admin`, config),
//         axios.get(`${API_URL}/admin/revenue`, config),
//         axios.get(`${API_URL}/admin/bookings-summary`, config),
//         axios.get(`${API_URL}/admin/users-summary`, config),
//       ]);

//       // DASHBOARD STATS
//       if (dashboardRes.status === "fulfilled") {
//         setStats(dashboardRes.value.data.data || stats);
//       }

//       // REVENUE
//       if (revenueRes.status === "fulfilled") {
//         setRevenueData(revenueRes.value.data.data || []);
//       }

//       // BOOKINGS
//       if (bookingRes.status === "fulfilled") {
//         setBookingSummary(bookingRes.value.data.data || []);
//       }

//       // USERS
//       if (usersRes.status === "fulfilled") {
//         setUsersSummary(usersRes.value.data.data || []);
//       }

//       // SHOW ERROR IF ALL FAILED
//       if (
//         dashboardRes.status === "rejected" &&
//         revenueRes.status === "rejected" &&
//         bookingRes.status === "rejected" &&
//         usersRes.status === "rejected"
//       ) {
//         toast.error("Failed to load dashboard data");
//       }

//     } catch (error) {
//       console.log(error);
//       toast.error(
//         error?.message || "Failed to load dashboard"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   /* ───────────────────────────────
//      STAT CARDS DATA
//   ─────────────────────────────── */
//   const statCards = [
//     {
//       title: "Total Users",
//       value: stats.total_users,
//       icon: HiUsers,
//       color: "purple",
//     },
//     {
//       title: "Total Trainers",
//       value: stats.total_trainers,
//       icon: HiUserGroup,
//       color: "pink",
//     },
//     {
//       title: "Total Bookings",
//       value: stats.total_bookings,
//       icon: HiCalendar,
//       color: "gold",
//     },
//     {
//       title: "Revenue",
//       value: `₹${stats.total_revenue}`,
//       icon: HiCurrencyDollar,
//       color: "green",
//     },
//     {
//       title: "Active Classes",
//       value: stats.total_classes,
//       icon: HiAcademicCap,
//       color: "blue",
//     },
//   ];

//   /* ───────────────────────────────
//      LOADING UI
//   ─────────────────────────────── */
//   if (loading) {
//     return (
//       <div className="p-6 text-white">
//         Loading dashboard...
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6 animate-slide-up">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Dashboard
//         </h1>

//         <p className="text-gray-400 mt-1">
//           Welcome back Admin
//         </p>
//       </div>

//       {/* STATS GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {statCards.map((card, index) => (
//           <StatCard
//             key={index}
//             title={card.title}
//             value={card.value}
//             icon={card.icon}
//             color={card.color}
//           />
//         ))}
//       </div>

//     </div>
//   );
// }


import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import {
  HiUsers,
  HiUserGroup,
  HiCalendar,
  HiAcademicCap,
  HiOfficeBuilding,
} from "react-icons/hi";

import StatCard from "../components/ui/StatCard";

const API_URL = "http://localhost:5000/api/dashboard";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    total_users: 0,
    total_trainers: 0,
    total_institutes: 0,
    total_classes: 0,
    total_bookings: 0,
  });

  const [bookingSummary, setBookingSummary] =
    useState([]);

  const [usersSummary, setUsersSummary] =
    useState([]);

  /* ───────────────────────────────
     AUTH CONFIG
  ─────────────────────────────── */

  const getConfig = () => {
    const token =
      localStorage.getItem("token");

    if (!token) {
      throw new Error(
        "Authentication token missing"
      );
    }

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  /* ───────────────────────────────
     FETCH DASHBOARD DATA
  ─────────────────────────────── */

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const config = getConfig();

      const [
        dashboardRes,
        bookingRes,
        usersRes,
      ] = await Promise.allSettled([
        axios.get(
          `${API_URL}/admin`,
          config
        ),
        axios.get(
          `${API_URL}/admin/bookings-summary`,
          config
        ),
        axios.get(
          `${API_URL}/admin/users-summary`,
          config
        ),
      ]);

      // Dashboard Stats
      if (
        dashboardRes.status ===
        "fulfilled"
      ) {
        setStats(
          dashboardRes.value.data.data ||
            {}
        );
      }

      // Booking Summary
      if (
        bookingRes.status ===
        "fulfilled"
      ) {
        setBookingSummary(
          bookingRes.value.data.data ||
            []
        );
      }

      // Users Summary
      if (
        usersRes.status ===
        "fulfilled"
      ) {
        setUsersSummary(
          usersRes.value.data.data || []
        );
      }

      if (
        dashboardRes.status ===
          "rejected" &&
        bookingRes.status ===
          "rejected" &&
        usersRes.status === "rejected"
      ) {
        toast.error(
          "Failed to load dashboard data"
        );
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error?.message ||
          "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  /* ───────────────────────────────
     STAT CARDS
  ─────────────────────────────── */

  const statCards = [
    {
      title: "Total Institutes",
      value: stats.total_institutes,
      icon: HiOfficeBuilding,
      color: "blue",
    },
    {
      title: "Total Trainers",
      value: stats.total_trainers,
      icon: HiUserGroup,
      color: "pink",
    },
    {
      title: "Total Students",
      value: stats.total_users,
      icon: HiUsers,
      color: "purple",
    },
    {
      title: "Total Classes",
      value: stats.total_classes,
      icon: HiAcademicCap,
      color: "green",
    },
    {
      title: "Total Bookings",
      value: stats.total_bookings,
      icon: HiCalendar,
      color: "gold",
    },
  ];

  /* ───────────────────────────────
     LOADING UI
  ─────────────────────────────── */

  if (loading) {
    return (
      <div className="p-6 text-white">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold gradient-text">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          Welcome back Admin
        </p>
      </div>

      {/* Stats Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {statCards.map((card, index) => (
          <StatCard
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
}