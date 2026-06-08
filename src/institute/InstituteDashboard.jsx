import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  HiAcademicCap,
  HiUserGroup,
  HiUsers,
  HiCalendar,
} from "react-icons/hi";

import StatCard from "../components/ui/StatCard";
import { getDashboard } from "../services/instituteService";

export default function InstituteDashboard() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    total_classes: 0,
    total_trainers: 0,
    total_students: 0,
    total_bookings: 0,
  });

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const token =
        localStorage.getItem("token");

      const res =
        await getDashboard(token);

      setStats(res.data || {});
    } catch (err) {
      console.error(err);

      toast.error(
        "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const statCards = [
    {
      title: "Total Classes",
      value: stats.total_classes || 0,
      icon: HiAcademicCap,
      color: "green",
    },
    {
      title: "Total Trainers",
      value: stats.total_trainers || 0,
      icon: HiUserGroup,
      color: "pink",
    },
    {
      title: "Total Students",
      value: stats.total_students || 0,
      icon: HiUsers,
      color: "purple",
    },
    {
      title: "Total Bookings",
      value: stats.total_bookings || 0,
      icon: HiCalendar,
      color: "gold",
    },
  ];

  if (loading) {
    return (
      <div className="p-6 text-white">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-slide-up">

      <div>
        <h1 className="text-3xl font-bold gradient-text">
          Institute Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          Welcome back Institute
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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