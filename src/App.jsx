import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Subcategories from "./pages/Subcategories";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";
import Institutes from "./pages/Institutes";
import Bookings from "./pages/Bookings";
import Students from "./pages/Students";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import { SidebarProvider } from "./context/SidebarContext";

function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="min-h-screen bg-background-dark">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="categories" element={<Categories />} />
              <Route path="subcategories" element={<Subcategories />} />
              <Route path="classes" element={<Classes />} />
              <Route path="trainers" element={<Trainers />} />
              <Route path="institutes" element={<Institutes />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="students" element={<Students />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#2f1d31",
                color: "#f6f8f8",
                border: "1px solid rgba(168, 66, 223, 0.3)",
                borderRadius: "12px",
                fontSize: "14px",
              },
              success: {
                iconTheme: {
                  primary: "#10b981",
                  secondary: "#f6f8f8",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "#f6f8f8",
                },
              },
            }}
          />
        </div>
      </SidebarProvider>
    </Router>

    // <Router>
    //   <SidebarProvider>
    //     <Routes>
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<Dashboard />} />
    //         <Route path="categories" element={<Categories />} />
    //         <Route path="subcategories" element={<Subcategories />} />
    //         <Route path="classes" element={<Classes />} />
    //         <Route path="trainers" element={<Trainers />} />
    //         <Route path="institutes" element={<Institutes />} />
    //         <Route path="bookings" element={<Bookings />} />
    //         <Route path="students" element={<Students />} />
    //         <Route path="analytics" element={<Analytics />} />
    //         <Route path="settings" element={<Settings />} />
    //       </Route>
    //     </Routes>

    //     <Toaster
    //       position="top-right"
    //       toastOptions={{
    //         style: {
    //           background: "#2f1d31",
    //           color: "#f6f8f8",
    //         },
    //       }}
    //     />
    //   </SidebarProvider>
    // </Router>
  );
}

export default App;
