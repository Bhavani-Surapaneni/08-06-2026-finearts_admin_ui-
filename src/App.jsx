// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import Layout from "./components/layout/Layout";

// import LoginMenu from "./pages/LoginMenu";
// import Login from "./pages/Login";
// import InstituteLogin from "./pages/InstituteLogin";
// import TrainerLogin from "./pages/TrainerLogin";

// import Dashboard from "./pages/Dashboard";
// import Categories from "./pages/Categories";
// import Subcategories from "./pages/Subcategories";
// import Classes from "./pages/Classes";
// import Trainers from "./pages/Trainers";
// import Institutes from "./pages/Institutes";
// import Bookings from "./pages/Bookings";
// import Students from "./pages/users";
// import Testimonials from "./pages/Testimonial";
// import InstituteCreateProfile from "./pages/InstituteCreateProfile";
// import InstitutePending from "./pages/InstitutePending";
// import InstituteDashboard from "./pages/InstituteDashboard";


// import { SidebarProvider } from "./context/SidebarContext";

// function ProtectedRoute() {
//   const token = localStorage.getItem("token");
//   return token ? <Layout /> : <Navigate to="/" replace />;
// }

// function App() {
//   return (
//     <Router>
//       <SidebarProvider>
//         <div className="min-h-screen bg-background-dark">
//           <Routes>
//             <Route path="/" element={<LoginMenu />} />

//             <Route path="/admin-login" element={<Login />} />
//             <Route path="/institute-login" element={<InstituteLogin />} />
//             <Route path="/trainer-login" element={<TrainerLogin />} />

//             <Route element={<ProtectedRoute />}>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/categories" element={<Categories />} />
//               <Route path="/subcategories" element={<Subcategories />} />
//               <Route path="/classes" element={<Classes />} />
//               <Route path="/trainers" element={<Trainers />} />
//               <Route path="/institutes" element={<Institutes />} />
//               <Route path="/bookings" element={<Bookings />} />
//               <Route path="/students" element={<Students />} />
//               <Route path="/testimonials" element={<Testimonials />} />

// <Route element={<ProtectedRoute />}>
//   <Route
//     path="/institute/create-profile"
//     element={<InstituteCreateProfile />}
//   />

//   <Route
//     path="/institute/pending"
//     element={<InstitutePending />}
//   />

//   <Route
//     path="/institute/dashboard"
//     element={<InstituteDashboard />}
//   />
// </Route>

//             </Route>

//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>

//           <Toaster position="top-right" />
//         </div>
//       </SidebarProvider>
//     </Router>
//   );
// }

// export default App;



// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// import Layout from "./components/layout/Layout";

// import LoginMenu from "./pages/LoginMenu";
// import Login from "./pages/Login";
// import InstituteLogin from "./pages/InstituteLogin";
// import TrainerLogin from "./pages/TrainerLogin";

// /* ADMIN PAGES */
// import Dashboard from "./pages/Dashboard";
// import Categories from "./pages/Categories";
// import Subcategories from "./pages/Subcategories";
// import Classes from "./pages/Classes";
// import Trainers from "./pages/Trainers";
// import Institutes from "./pages/Institutes";
// import Bookings from "./pages/Bookings";
// import Students from "./pages/users";
// import Testimonials from "./pages/Testimonial";

// /* INSTITUTE PAGES */
// import InstituteCreateProfile from "./pages/InstituteCreateProfile";
// import InstitutePending from "./pages/InstitutePending";
// import InstituteDashboard from "./pages/InstituteDashboard";

// import { SidebarProvider } from "./context/SidebarContext";

// /* =========================
//    ADMIN PROTECTED ROUTE
// ========================= */
// function ProtectedRoute() {
//   const token = localStorage.getItem("token");

//   return token ? (
//     <Layout />
//   ) : (
//     <Navigate to="/" replace />
//   );
// }

// /* =========================
//    APP
// ========================= */
// function App() {
//   return (
//     <Router>
//       <SidebarProvider>
//         <div className="min-h-screen bg-background-dark">
//           <Routes>

//             {/* LOGIN PAGES */}
//             <Route path="/" element={<LoginMenu />} />

//             <Route
//               path="/admin-login"
//               element={<Login />}
//             />

//             <Route
//               path="/institute-login"
//               element={<InstituteLogin />}
//             />

//             <Route
//               path="/trainer-login"
//               element={<TrainerLogin />}
//             />

//             {/* =========================
//                 ADMIN PANEL
//             ========================= */}
//             <Route element={<ProtectedRoute />}>
//               <Route
//                 path="/dashboard"
//                 element={<Dashboard />}
//               />

//               <Route
//                 path="/categories"
//                 element={<Categories />}
//               />

//               <Route
//                 path="/subcategories"
//                 element={<Subcategories />}
//               />

//               <Route
//                 path="/classes"
//                 element={<Classes />}
//               />

//               <Route
//                 path="/trainers"
//                 element={<Trainers />}
//               />

//               <Route
//                 path="/institutes"
//                 element={<Institutes />}
//               />

//               <Route
//                 path="/bookings"
//                 element={<Bookings />}
//               />

//               <Route
//                 path="/students"
//                 element={<Students />}
//               />

//               <Route
//                 path="/testimonials"
//                 element={<Testimonials />}
//               />
//             </Route>

//             {/* =========================
//                 INSTITUTE PANEL
//                 (NO ADMIN SIDEBAR)
//             ========================= */}

//             <Route
//               path="/institute/create-profile"
//               element={<InstituteCreateProfile />}
//             />

//             <Route
//               path="/institute/pending"
//               element={<InstitutePending />}
//             />

//             <Route
//               path="/institute/dashboard"
//               element={<InstituteDashboard />}
//             />

//             {/* FALLBACK */}
//             <Route
//               path="*"
//               element={<Navigate to="/" replace />}
//             />
//           </Routes>

//           <Toaster position="top-right" />
//         </div>
//       </SidebarProvider>
//     </Router>
//   );
// }

// export default 

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { SidebarProvider } from "./context/SidebarContext";

/* =========================
   ADMIN LAYOUT
========================= */
import Layout from "./components/layout/Layout";

/* =========================
   LOGIN PAGES
========================= */
import LoginMenu from "./pages/LoginMenu";
import Login from "./pages/Login";
import InstituteLogin from "./pages/InstituteLogin";
import TrainerLogin from "./pages/TrainerLogin";

/* =========================
   ADMIN PAGES
========================= */
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Subcategories from "./pages/Subcategories";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";
import Institutes from "./pages/Institutes";
import Bookings from "./pages/Bookings";
import Students from "./pages/users";
import Testimonials from "./pages/Testimonial";

/* =========================
   INSTITUTE AUTH PAGES
========================= */
import InstituteCreateProfile from "./institute/InstituteCreateProfile";
import InstitutePending from "./institute/InstitutePending";

/* =========================
   INSTITUTE PANEL
========================= */
import InstituteLayout from "./institute/InstituteLayout";
import DashboardInstitute from "./institute/InstituteDashboard";
import TrainersInstitute from "./institute/InstituteTrainers";
import InstituteStudents from "./institute/InstituteStudents";
import InstituteInstitutes from "./institute/InstituteInstitutes";
import ClassesInstitute from "./institute/InstituteClasses";
import BookingsInstitute from "./institute/InstituteBookings";
import ProfileInstitute from "./institute/InstituteProfile";


import TrainerLayout from "./trainer/TrainerLayout";
import TrainerDashboard from "./trainer/TrainerDashboard";
import TrainerClasses from "./trainer/TrainerClasses";
import TrainerBookings from "./trainer/TrainerBookings";
import TrainerStudents from "./trainer/TrainerStudents";
import TrainerProfile from "./trainer/TrainerProfile";






/* =========================
   ADMIN PROTECTED ROUTE
========================= */
function AdminProtectedRoute() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "ADMIN") {
    return <Navigate to="/admin-login" replace />;
  }

  return <Layout />;
}

/* =========================
   INSTITUTE PROTECTED ROUTE
========================= */
function InstituteProtectedRoute() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "INSTITUTE") {
    return <Navigate to="/institute-login" replace />;
  }

  return <Outlet />;
}


function TrainerProtectedRoute() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  console.log("TRAINER TOKEN:", token);
  console.log("TRAINER ROLE:", role);

  if (!token || role !== "TRAINER") {
    return <Navigate to="/trainer-login" replace />;
  }

  return <Outlet />;
}

function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="min-h-screen bg-background-dark">
          <Routes>

            {/* =========================
                LOGIN PAGES
            ========================= */}
            <Route path="/" element={<LoginMenu />} />
            <Route path="/admin-login" element={<Login />} />
            <Route path="/institute-login" element={<InstituteLogin />} />
            <Route path="/trainer-login" element={<TrainerLogin />} />

            {/* =========================
                ADMIN PANEL
            ========================= */}
            <Route element={<AdminProtectedRoute />}>

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

              <Route
                path="/categories"
                element={<Categories />}
              />

              <Route
                path="/subcategories"
                element={<Subcategories />}
              />

              <Route
                path="/classes"
                element={<Classes />}
              />

              <Route
                path="/trainers"
                element={<Trainers />}
              />

              <Route
                path="/institutes"
                element={<Institutes />}
              />

              <Route
                path="/institutes/pending"
                element={<Institutes />}
              />

              <Route
                path="/institutes/approved"
                element={<Institutes />}
              />

              <Route
                path="/institutes/rejected"
                element={<Institutes />}
              />

              <Route
                path="/bookings"
                element={<Bookings />}
              />

              <Route
                path="/students"
                element={<Students />}
              />

              <Route
                path="/testimonials"
                element={<Testimonials />}
              />

            </Route>

            {/* =========================
                INSTITUTE FLOW
            ========================= */}
            <Route element={<InstituteProtectedRoute />}>

             <Route
  path="/institute/create-profile"
  element={<InstituteCreateProfile />}
/>
              <Route
                path="/institute/pending"
                element={<InstitutePending />}
              />

              <Route
                path="/institute"
                element={<InstituteLayout />}
              >
                {/* Redirect /institute -> dashboard */}
                <Route
                  index
                  element={
                    <Navigate
                      to="dashboard"
                      replace
                    />
                  }
                />

                <Route
                  path="dashboard"
                  element={<DashboardInstitute />}
                />

                <Route
                  path="classes"
                  element={<ClassesInstitute />}
                />

                <Route
                  path="trainers"
                  element={<TrainersInstitute />}
                />

                <Route
  path="students"
  element={<InstituteStudents />}
/>

<Route
  path="institutes"
  element={<InstituteInstitutes />}
/>

                <Route
                  path="bookings"
                  element={<BookingsInstitute />}
                />

                <Route
                  path="profile"
                  element={<ProfileInstitute />}
                />
              </Route>

            </Route>


{/* =========================
    TRAINER PANEL
========================= */}
<Route element={<TrainerProtectedRoute />}>
  <Route
    path="/trainer"
    element={<TrainerLayout />}
  >
    <Route
      index
      element={
        <Navigate
          to="dashboard"
          replace
        />
      }
    />

    <Route
      path="dashboard"
      element={<TrainerDashboard />}
    />

    <Route
      path="classes"
      element={<TrainerClasses />}
    />

    <Route
      path="bookings"
      element={<TrainerBookings />}
    />

    <Route
      path="students"
      element={<TrainerStudents />}
    />

    <Route
      path="profile"
      element={<TrainerProfile />}
    />
  </Route>
</Route>



            {/* =========================
                FALLBACK
            ========================= */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />

          </Routes>

          <Toaster position="top-right" />
        </div>
      </SidebarProvider>
    </Router>
  );
}

export default App;