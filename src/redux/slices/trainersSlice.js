import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trainers: [
    {
      id: 1,
      name: "Alex Rivera",
      email: "alex@email.com",
      phone: "+1-555-0101",
      skill: "Hip Hop Dance",
      specialty: "Urban Dance",
      rating: 4.8,
      students: 156,
      experience: "8 years",
      status: "approved",
      bio: "Professional hip-hop dancer with 8+ years of teaching experience.",
      joinDate: "2023-06-15",
      avatar: null,
      verified: true,
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria@email.com",
      phone: "+1-555-0102",
      skill: "Guitar",
      specialty: "Acoustic & Electric",
      rating: 4.9,
      students: 203,
      experience: "12 years",
      status: "approved",
      bio: "Certified guitar instructor specializing in various genres.",
      joinDate: "2023-05-20",
      avatar: null,
      verified: true,
    },
    {
      id: 3,
      name: "Kenji Tanaka",
      email: "kenji@email.com",
      phone: "+1-555-0103",
      skill: "Karate",
      specialty: "Shotokan Karate",
      rating: 4.7,
      students: 189,
      experience: "15 years",
      status: "approved",
      bio: "3rd degree black belt in Shotokan Karate with competition experience.",
      joinDate: "2023-07-10",
      avatar: null,
      verified: true,
    },
    {
      id: 4,
      name: "Priya Sharma",
      email: "priya@email.com",
      phone: "+1-555-0104",
      skill: "Bollywood Dance",
      specialty: "Fusion Dance",
      rating: 4.6,
      students: 134,
      experience: "6 years",
      status: "approved",
      bio: "Bollywood choreographer trained in classical and contemporary dance.",
      joinDate: "2023-08-05",
      avatar: null,
      verified: true,
    },
    {
      id: 5,
      name: "Lisa Chen",
      email: "lisa@email.com",
      phone: "+1-555-0105",
      skill: "Yoga",
      specialty: "Hatha & Vinyasa",
      rating: 4.8,
      students: 178,
      experience: "10 years",
      status: "approved",
      bio: "RYT-500 certified yoga instructor with meditation expertise.",
      joinDate: "2023-04-12",
      avatar: null,
      verified: true,
    },
    {
      id: 6,
      name: "Tom Wilson",
      email: "tom@email.com",
      phone: "+1-555-0106",
      skill: "Drums",
      specialty: "Rock & Jazz",
      rating: 4.5,
      students: 87,
      experience: "7 years",
      status: "pending",
      bio: "Session drummer with live performance and studio recording experience.",
      joinDate: "2024-01-02",
      avatar: null,
      verified: false,
    },
    {
      id: 7,
      name: "Ananya Iyer",
      email: "ananya@email.com",
      phone: "+1-555-0107",
      skill: "Classical Dance",
      specialty: "Bharatanatyam",
      rating: 4.9,
      students: 112,
      experience: "20 years",
      status: "approved",
      bio: "Arangetram-performed classical dancer with extensive teaching credentials.",
      joinDate: "2023-03-18",
      avatar: null,
      verified: true,
    },
    {
      id: 8,
      name: "Sofia Martinez",
      email: "sofia@email.com",
      phone: "+1-555-0108",
      skill: "Zumba",
      specialty: "Fitness Zumba",
      rating: 4.7,
      students: 245,
      experience: "5 years",
      status: "suspended",
      bio: "Licensed Zumba instructor certified in multiple fitness programs.",
      joinDate: "2023-09-01",
      avatar: null,
      verified: true,
    },
  ],
  loading: false,
};

const trainersSlice = createSlice({
  name: "trainers",
  initialState,
  reducers: {
    approveTrainer: (state, action) => {
      const trainer = state.trainers.find((t) => t.id === action.payload);
      if (trainer) {
        trainer.status = "approved";
        trainer.verified = true;
      }
    },
    rejectTrainer: (state, action) => {
      const trainer = state.trainers.find((t) => t.id === action.payload);
      if (trainer) {
        trainer.status = "rejected";
      }
    },
    suspendTrainer: (state, action) => {
      const trainer = state.trainers.find((t) => t.id === action.payload);
      if (trainer) {
        trainer.status = "suspended";
      }
    },
    updateTrainer: (state, action) => {
      const index = state.trainers.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.trainers[index] = action.payload;
      }
    },
    deleteTrainer: (state, action) => {
      state.trainers = state.trainers.filter((t) => t.id !== action.payload);
    },
  },
});

export const {
  approveTrainer,
  rejectTrainer,
  suspendTrainer,
  updateTrainer,
  deleteTrainer,
} = trainersSlice.actions;
export default trainersSlice.reducer;
