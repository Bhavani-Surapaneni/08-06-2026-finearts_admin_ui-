import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stats: {
    totalStudents: 1248,
    totalTrainers: 86,
    totalBookings: 3429,
    revenue: 284750,
    activeClasses: 156,
  },
  recentActivity: [
    {
      id: 1,
      type: "booking",
      message: "New booking for Hip-Hop Beginner",
      time: "2 min ago",
      user: "John Doe",
    },
    {
      id: 2,
      type: "student",
      message: "New student registered",
      time: "5 min ago",
      user: "Sarah Smith",
    },
    {
      id: 3,
      type: "payment",
      message: "Payment received $150",
      time: "12 min ago",
      user: "Mike Johnson",
    },
    {
      id: 4,
      type: "review",
      message: "New review on Guitar Basics",
      time: "18 min ago",
      user: "Emma Wilson",
    },
    {
      id: 5,
      type: "trainer",
      message: "New trainer application",
      time: "25 min ago",
      user: "David Brown",
    },
  ],
  monthlyRevenue: [
    { month: "Jan", revenue: 18500 },
    { month: "Feb", revenue: 22300 },
    { month: "Mar", revenue: 19800 },
    { month: "Apr", revenue: 25600 },
    { month: "May", revenue: 28900 },
    { month: "Jun", revenue: 32100 },
    { month: "Jul", revenue: 29500 },
    { month: "Aug", revenue: 34200 },
    { month: "Sep", revenue: 31800 },
    { month: "Oct", revenue: 36700 },
    { month: "Nov", revenue: 38900 },
    { month: "Dec", revenue: 42500 },
  ],
  bookingGrowth: [
    { month: "Jan", bookings: 180 },
    { month: "Feb", bookings: 220 },
    { month: "Mar", bookings: 195 },
    { month: "Apr", bookings: 260 },
    { month: "May", bookings: 290 },
    { month: "Jun", bookings: 320 },
    { month: "Jul", bookings: 295 },
    { month: "Aug", bookings: 340 },
    { month: "Sep", bookings: 315 },
    { month: "Oct", bookings: 365 },
    { month: "Nov", bookings: 385 },
    { month: "Dec", bookings: 420 },
  ],
  popularCategories: [
    { name: "Dance", count: 45, percentage: 35 },
    { name: "Music", count: 38, percentage: 30 },
    { name: "Karate", count: 25, percentage: 20 },
    { name: "Yoga", count: 15, percentage: 12 },
    { name: "Arts", count: 8, percentage: 6 },
  ],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;
