import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: [
    {
      id: 1,
      title: "Hip-Hop Beginner",
      category: "Dance",
      subcategory: "Hip Hop",
      trainer: "Alex Rivera",
      price: 89,
      duration: "8 weeks",
      maxStudents: 20,
      currentStudents: 15,
      status: "active",
      featured: true,
      rating: 4.8,
      image: "/images/class-hiphop.jpg",
    },
    {
      id: 2,
      title: "Guitar Basics",
      category: "Music",
      subcategory: "Guitar",
      trainer: "Maria Garcia",
      price: 120,
      duration: "10 weeks",
      maxStudents: 15,
      currentStudents: 12,
      status: "active",
      featured: true,
      rating: 4.9,
      image: "/images/class-guitar.jpg",
    },
    {
      id: 3,
      title: "Kids Karate",
      category: "Karate",
      subcategory: "Kids Karate",
      trainer: "Kenji Tanaka",
      price: 95,
      duration: "12 weeks",
      maxStudents: 25,
      currentStudents: 22,
      status: "active",
      featured: false,
      rating: 4.7,
      image: "/images/class-karate.jpg",
    },
    {
      id: 4,
      title: "Bollywood Fusion",
      category: "Dance",
      subcategory: "Bollywood",
      trainer: "Priya Sharma",
      price: 75,
      duration: "6 weeks",
      maxStudents: 30,
      currentStudents: 28,
      status: "active",
      featured: true,
      rating: 4.6,
      image: "/images/class-bollywood.jpg",
    },
    {
      id: 5,
      title: "Yoga for Beginners",
      category: "Yoga",
      subcategory: "Hatha Yoga",
      trainer: "Lisa Chen",
      price: 65,
      duration: "8 weeks",
      maxStudents: 20,
      currentStudents: 18,
      status: "active",
      featured: false,
      rating: 4.8,
      image: "/images/class-yoga.jpg",
    },
    {
      id: 6,
      title: "Drumming Fundamentals",
      category: "Music",
      subcategory: "Drums",
      trainer: "Tom Wilson",
      price: 110,
      duration: "10 weeks",
      maxStudents: 10,
      currentStudents: 8,
      status: "paused",
      featured: false,
      rating: 4.5,
      image: "/images/class-drums.jpg",
    },
    {
      id: 7,
      title: "Classical Dance",
      category: "Dance",
      subcategory: "Classical",
      trainer: "Ananya Iyer",
      price: 130,
      duration: "16 weeks",
      maxStudents: 15,
      currentStudents: 14,
      status: "active",
      featured: true,
      rating: 4.9,
      image: "/images/class-classical.jpg",
    },
    {
      id: 8,
      title: "Zumba Fitness",
      category: "Dance",
      subcategory: "Zumba",
      trainer: "Sofia Martinez",
      price: 70,
      duration: "4 weeks",
      maxStudents: 35,
      currentStudents: 32,
      status: "active",
      featured: false,
      rating: 4.7,
      image: "/images/class-zumba.jpg",
    },
  ],
  loading: false,
};

const classesSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    addClass: (state, action) => {
      state.classes.push(action.payload);
    },
    updateClass: (state, action) => {
      const index = state.classes.findIndex(
        (cls) => cls.id === action.payload.id,
      );
      if (index !== -1) {
        state.classes[index] = action.payload;
      }
    },
    deleteClass: (state, action) => {
      state.classes = state.classes.filter((cls) => cls.id !== action.payload);
    },
    toggleFeatured: (state, action) => {
      const cls = state.classes.find((c) => c.id === action.payload);
      if (cls) {
        cls.featured = !cls.featured;
      }
    },
    updateStatus: (state, action) => {
      const cls = state.classes.find((c) => c.id === action.payload.id);
      if (cls) {
        cls.status = action.payload.status;
      }
    },
  },
});

export const {
  addClass,
  updateClass,
  deleteClass,
  toggleFeatured,
  updateStatus,
} = classesSlice.actions;
export default classesSlice.reducer;
