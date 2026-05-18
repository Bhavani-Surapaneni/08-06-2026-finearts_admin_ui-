import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import dashboardReducer from "./slices/dashboardSlice";
import categoriesReducer from "./slices/categoriesSlice";
import classesReducer from "./slices/classesSlice";
import trainersReducer from "./slices/trainersSlice";
import institutesReducer from "./slices/institutesSlice";
import bookingsReducer from "./slices/bookingsSlice";
import studentsReducer from "./slices/studentsSlice";
import analyticsReducer from "./slices/analyticsSlice";
import settingsReducer from "./slices/settingsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    categories: categoriesReducer,
    classes: classesReducer,
    trainers: trainersReducer,
    institutes: institutesReducer,
    bookings: bookingsReducer,
    students: studentsReducer,
    analytics: analyticsReducer,
    settings: settingsReducer,
  },
});
