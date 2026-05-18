import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  revenueData: {
    total: 284750,
    monthly: [
      { month: "Jan", amount: 18500, growth: 12 },
      { month: "Feb", amount: 22300, growth: 20 },
      { month: "Mar", amount: 19800, growth: -11 },
      { month: "Apr", amount: 25600, growth: 29 },
      { month: "May", amount: 28900, growth: 13 },
      { month: "Jun", amount: 32100, growth: 11 },
      { month: "Jul", amount: 29500, growth: -8 },
      { month: "Aug", amount: 34200, growth: 16 },
      { month: "Sep", amount: 31800, growth: -7 },
      { month: "Oct", amount: 36700, growth: 15 },
      { month: "Nov", amount: 38900, growth: 6 },
      { month: "Dec", amount: 42500, growth: 9 },
    ],
  },
  newStudentsData: {
    total: 1248,
    monthly: [
      { month: "Jan", count: 85 },
      { month: "Feb", count: 102 },
      { month: "Mar", count: 98 },
      { month: "Apr", count: 115 },
      { month: "May", count: 128 },
      { month: "Jun", count: 142 },
      { month: "Jul", count: 135 },
      { month: "Aug", count: 158 },
      { month: "Sep", count: 145 },
      { month: "Oct", count: 168 },
      { month: "Nov", count: 178 },
      { month: "Dec", count: 194 },
    ],
  },
  topTrainers: [
    {
      id: 1,
      name: "Sofia Martinez",
      students: 245,
      revenue: 19600,
      rating: 4.7,
      classes: 3,
    },
    {
      id: 2,
      name: "Maria Garcia",
      students: 203,
      revenue: 24360,
      rating: 4.9,
      classes: 2,
    },
    {
      id: 3,
      name: "Kenji Tanaka",
      students: 189,
      revenue: 17955,
      rating: 4.7,
      classes: 1,
    },
    {
      id: 4,
      name: "Alex Rivera",
      students: 156,
      revenue: 13884,
      rating: 4.8,
      classes: 1,
    },
    {
      id: 5,
      name: "Lisa Chen",
      students: 178,
      revenue: 11570,
      rating: 4.8,
      classes: 1,
    },
  ],
  mostBookedClasses: [
    {
      id: 1,
      name: "Zumba Fitness",
      bookings: 320,
      revenue: 22400,
      fillRate: 91,
    },
    {
      id: 2,
      name: "Bollywood Fusion",
      bookings: 280,
      revenue: 21000,
      fillRate: 93,
    },
    { id: 3, name: "Kids Karate", bookings: 250, revenue: 23750, fillRate: 88 },
    {
      id: 4,
      name: "Hip-Hop Beginner",
      bookings: 220,
      revenue: 19580,
      fillRate: 75,
    },
    {
      id: 5,
      name: "Guitar Basics",
      bookings: 195,
      revenue: 23400,
      fillRate: 80,
    },
  ],
  conversionRates: {
    trialToPaid: 68,
    websiteVisitors: 12,
    repeatBookings: 45,
  },
  categoryPerformance: [
    { category: "Dance", revenue: 98500, bookings: 1120, growth: 15 },
    { category: "Music", revenue: 78200, bookings: 890, growth: 22 },
    { category: "Karate", revenue: 54300, bookings: 580, growth: 18 },
    { category: "Yoga", revenue: 32600, bookings: 420, growth: 28 },
    { category: "Arts", revenue: 21150, bookings: 280, growth: 10 },
  ],
};

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {},
});

export default analyticsSlice.reducer;
