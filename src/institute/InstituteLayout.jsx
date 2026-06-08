import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function InstituteLayout() {
  return (
    <div className="flex h-screen bg-background-dark">
      <Sidebar role="INSTITUTE" />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}