import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      id: 101,
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1-555-0001",
      joinedDate: "2023-08-15",
      totalBookings: 12,
      totalSpent: 1080,
      status: "active",
      lastActive: "2024-01-20",
      avatar: null,
    },
    {
      id: 102,
      name: "Sarah Smith",
      email: "sarah.smith@email.com",
      phone: "+1-555-0002",
      joinedDate: "2023-09-20",
      totalBookings: 8,
      totalSpent: 720,
      status: "active",
      lastActive: "2024-01-19",
      avatar: null,
    },
    {
      id: 103,
      name: "Mike Johnson",
      email: "mike.j@email.com",
      phone: "+1-555-0003",
      joinedDate: "2023-10-05",
      totalBookings: 5,
      totalSpent: 450,
      status: "active",
      lastActive: "2024-01-18",
      avatar: null,
    },
    {
      id: 104,
      name: "Emma Wilson",
      email: "emma.w@email.com",
      phone: "+1-555-0004",
      joinedDate: "2023-07-12",
      totalBookings: 15,
      totalSpent: 1350,
      status: "blocked",
      lastActive: "2024-01-10",
      avatar: null,
    },
    {
      id: 105,
      name: "David Brown",
      email: "david.b@email.com",
      phone: "+1-555-0005",
      joinedDate: "2023-11-28",
      totalBookings: 3,
      totalSpent: 270,
      status: "active",
      lastActive: "2024-01-17",
      avatar: null,
    },
    {
      id: 106,
      name: "Lisa Anderson",
      email: "lisa.a@email.com",
      phone: "+1-555-0006",
      joinedDate: "2023-06-30",
      totalBookings: 20,
      totalSpent: 1800,
      status: "active",
      lastActive: "2024-01-16",
      avatar: null,
    },
    {
      id: 107,
      name: "Robert Taylor",
      email: "robert.t@email.com",
      phone: "+1-555-0007",
      joinedDate: "2024-01-02",
      totalBookings: 1,
      totalSpent: 130,
      status: "active",
      lastActive: "2024-01-15",
      avatar: null,
    },
    {
      id: 108,
      name: "Jennifer Martinez",
      email: "jennifer.m@email.com",
      phone: "+1-555-0008",
      joinedDate: "2023-12-15",
      totalBookings: 4,
      totalSpent: 360,
      status: "active",
      lastActive: "2024-01-14",
      avatar: null,
    },
    {
      id: 109,
      name: "Chris Lee",
      email: "chris.l@email.com",
      phone: "+1-555-0009",
      joinedDate: "2023-05-20",
      totalBookings: 18,
      totalSpent: 1620,
      status: "active",
      lastActive: "2024-01-13",
      avatar: null,
    },
    {
      id: 110,
      name: "Amanda White",
      email: "amanda.w@email.com",
      phone: "+1-555-0010",
      joinedDate: "2024-01-10",
      totalBookings: 1,
      totalSpent: 120,
      status: "active",
      lastActive: "2024-01-12",
      avatar: null,
    },
  ],
  loading: false,
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    blockStudent: (state, action) => {
      const student = state.students.find((s) => s.id === action.payload);
      if (student) {
        student.status = "blocked";
      }
    },
    unblockStudent: (state, action) => {
      const student = state.students.find((s) => s.id === action.payload);
      if (student) {
        student.status = "active";
      }
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter((s) => s.id !== action.payload);
    },
  },
});

export const { blockStudent, unblockStudent, deleteStudent } =
  studentsSlice.actions;
export default studentsSlice.reducer;
