import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  institutes: [
    {
      id: 1,
      name: "Rhythm Dance Studio",
      city: "New York",
      address: "123 Broadway, NY 10001",
      courses: 12,
      rating: 4.8,
      status: "verified",
      featured: true,
      owner: "Alex Rivera",
      phone: "+1-555-1001",
      email: "rhythm@example.com",
      established: "2018",
      description: "Premier dance studio offering diverse dance forms.",
    },
    {
      id: 2,
      name: "BeatBox Music Institute",
      city: "Los Angeles",
      address: "456 Sunset Blvd, LA 90028",
      courses: 8,
      rating: 4.7,
      status: "verified",
      featured: true,
      owner: "Maria Garcia",
      phone: "+1-555-1002",
      email: "beatbox@example.com",
      established: "2019",
      description: "State-of-the-art music learning center.",
    },
    {
      id: 3,
      name: "Warrior Dojo",
      city: "Chicago",
      address: "789 Michigan Ave, Chicago 60611",
      courses: 6,
      rating: 4.9,
      status: "verified",
      featured: false,
      owner: "Kenji Tanaka",
      phone: "+1-555-1003",
      email: "warrior@example.com",
      established: "2015",
      description: "Traditional martial arts training center.",
    },
    {
      id: 4,
      name: "Zen Yoga Center",
      city: "San Francisco",
      address: "321 Market St, SF 94105",
      courses: 10,
      rating: 4.8,
      status: "pending",
      featured: false,
      owner: "Lisa Chen",
      phone: "+1-555-1004",
      email: "zen@example.com",
      established: "2020",
      description: "Holistic yoga and wellness center.",
    },
    {
      id: 5,
      name: "Creative Arts Academy",
      city: "Miami",
      address: "654 Ocean Dr, Miami 33139",
      courses: 15,
      rating: 4.6,
      status: "verified",
      featured: true,
      owner: "James Carter",
      phone: "+1-555-1005",
      email: "creative@example.com",
      established: "2017",
      description: "Comprehensive arts education for all ages.",
    },
    {
      id: 6,
      name: "FitLife Studio",
      city: "Houston",
      address: "987 Main St, Houston 77002",
      courses: 9,
      rating: 4.5,
      status: "unverified",
      featured: false,
      owner: "Sarah Johnson",
      phone: "+1-555-1006",
      email: "fitlife@example.com",
      established: "2021",
      description: "Modern fitness and wellness facility.",
    },
  ],
  loading: false,
};

const institutesSlice = createSlice({
  name: "institutes",
  initialState,
  reducers: {
    verifyInstitute: (state, action) => {
      const institute = state.institutes.find((i) => i.id === action.payload);
      if (institute) {
        institute.status = "verified";
      }
    },
    updateInstitute: (state, action) => {
      const index = state.institutes.findIndex(
        (i) => i.id === action.payload.id,
      );
      if (index !== -1) {
        state.institutes[index] = action.payload;
      }
    },
    deleteInstitute: (state, action) => {
      state.institutes = state.institutes.filter(
        (i) => i.id !== action.payload,
      );
    },
    toggleFeatured: (state, action) => {
      const institute = state.institutes.find((i) => i.id === action.payload);
      if (institute) {
        institute.featured = !institute.featured;
      }
    },
  },
});

export const {
  verifyInstitute,
  updateInstitute,
  deleteInstitute,
  toggleFeatured,
} = institutesSlice.actions;
export default institutesSlice.reducer;
