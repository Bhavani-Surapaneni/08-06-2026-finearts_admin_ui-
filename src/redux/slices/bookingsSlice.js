import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [
    {
      id: 1,
      studentName: "John Doe",
      className: "Hip-Hop Beginner",
      trainerName: "Alex Rivera",
      date: "2024-01-20",
      time: "10:00 AM",
      payment: 89,
      status: "confirmed",
      type: "paid",
      studentId: 101,
      classId: 1,
    },
    {
      id: 2,
      studentName: "Sarah Smith",
      className: "Guitar Basics",
      trainerName: "Maria Garcia",
      date: "2024-01-21",
      time: "2:00 PM",
      payment: 120,
      status: "completed",
      type: "paid",
      studentId: 102,
      classId: 2,
    },
    {
      id: 3,
      studentName: "Mike Johnson",
      className: "Kids Karate",
      trainerName: "Kenji Tanaka",
      date: "2024-01-22",
      time: "4:00 PM",
      payment: 95,
      status: "pending",
      type: "trial",
      studentId: 103,
      classId: 3,
    },
    {
      id: 4,
      studentName: "Emma Wilson",
      className: "Bollywood Fusion",
      trainerName: "Priya Sharma",
      date: "2024-01-23",
      time: "11:00 AM",
      payment: 75,
      status: "cancelled",
      type: "paid",
      studentId: 104,
      classId: 4,
    },
    {
      id: 5,
      studentName: "David Brown",
      className: "Yoga for Beginners",
      trainerName: "Lisa Chen",
      date: "2024-01-24",
      time: "7:00 AM",
      payment: 65,
      status: "confirmed",
      type: "paid",
      studentId: 105,
      classId: 5,
    },
    {
      id: 6,
      studentName: "Lisa Anderson",
      className: "Drumming Fundamentals",
      trainerName: "Tom Wilson",
      date: "2024-01-25",
      time: "3:00 PM",
      payment: 110,
      status: "refunded",
      type: "paid",
      studentId: 106,
      classId: 6,
    },
    {
      id: 7,
      studentName: "Robert Taylor",
      className: "Classical Dance",
      trainerName: "Ananya Iyer",
      date: "2024-01-26",
      time: "9:00 AM",
      payment: 130,
      status: "pending",
      type: "trial",
      studentId: 107,
      classId: 7,
    },
    {
      id: 8,
      studentName: "Jennifer Martinez",
      className: "Zumba Fitness",
      trainerName: "Sofia Martinez",
      date: "2024-01-27",
      time: "6:00 PM",
      payment: 70,
      status: "confirmed",
      type: "paid",
      studentId: 108,
      classId: 8,
    },
    {
      id: 9,
      studentName: "Chris Lee",
      className: "Hip-Hop Beginner",
      trainerName: "Alex Rivera",
      date: "2024-01-28",
      time: "10:00 AM",
      payment: 89,
      status: "completed",
      type: "paid",
      studentId: 109,
      classId: 1,
    },
    {
      id: 10,
      studentName: "Amanda White",
      className: "Guitar Basics",
      trainerName: "Maria Garcia",
      date: "2024-01-29",
      time: "2:00 PM",
      payment: 120,
      status: "pending",
      type: "trial",
      studentId: 110,
      classId: 2,
    },
  ],
  loading: false,
  filters: {
    status: "all",
    type: "all",
    search: "",
  },
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    updateBookingStatus: (state, action) => {
      const booking = state.bookings.find((b) => b.id === action.payload.id);
      if (booking) {
        booking.status = action.payload.status;
      }
    },
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    addBooking: (state, action) => {
      state.bookings.unshift(action.payload);
    },
  },
});

export const { updateBookingStatus, setFilter, addBooking } =
  bookingsSlice.actions;
export default bookingsSlice.reducer;
