import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      id: 1,
      name: "Dance",
      icon: "music-note",
      slug: "dance",
      status: "active",
      order: 1,
      subcategoriesCount: 6,
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      name: "Music",
      icon: "guitar",
      slug: "music",
      status: "active",
      order: 2,
      subcategoriesCount: 5,
      createdAt: "2024-01-15",
    },
    {
      id: 3,
      name: "Karate",
      icon: "sports-martial-arts",
      slug: "karate",
      status: "active",
      order: 3,
      subcategoriesCount: 3,
      createdAt: "2024-01-16",
    },
    {
      id: 4,
      name: "Yoga",
      icon: "self-improvement",
      slug: "yoga",
      status: "active",
      order: 4,
      subcategoriesCount: 4,
      createdAt: "2024-01-17",
    },
    {
      id: 5,
      name: "Arts",
      icon: "palette",
      slug: "arts",
      status: "active",
      order: 5,
      subcategoriesCount: 3,
      createdAt: "2024-01-18",
    },
    {
      id: 6,
      name: "Fitness",
      icon: "fitness-center",
      slug: "fitness",
      status: "inactive",
      order: 6,
      subcategoriesCount: 2,
      createdAt: "2024-01-19",
    },
  ],
  subcategories: [
    {
      id: 1,
      categoryId: 1,
      name: "Hip Hop",
      slug: "hip-hop",
      status: "active",
    },
    {
      id: 2,
      categoryId: 1,
      name: "Bollywood",
      slug: "bollywood",
      status: "active",
    },
    {
      id: 3,
      categoryId: 1,
      name: "Classical",
      slug: "classical",
      status: "active",
    },
    { id: 4, categoryId: 1, name: "Zumba", slug: "zumba", status: "active" },
    { id: 5, categoryId: 1, name: "Salsa", slug: "salsa", status: "active" },
    {
      id: 6,
      categoryId: 1,
      name: "Contemporary",
      slug: "contemporary",
      status: "inactive",
    },
    { id: 7, categoryId: 2, name: "Guitar", slug: "guitar", status: "active" },
    {
      id: 8,
      categoryId: 2,
      name: "Keyboard",
      slug: "keyboard",
      status: "active",
    },
    { id: 9, categoryId: 2, name: "Vocal", slug: "vocal", status: "active" },
    { id: 10, categoryId: 2, name: "Drums", slug: "drums", status: "active" },
    { id: 11, categoryId: 2, name: "Piano", slug: "piano", status: "active" },
    {
      id: 12,
      categoryId: 3,
      name: "Kids Karate",
      slug: "kids-karate",
      status: "active",
    },
    {
      id: 13,
      categoryId: 3,
      name: "Adult Karate",
      slug: "adult-karate",
      status: "active",
    },
    {
      id: 14,
      categoryId: 3,
      name: "Self Defense",
      slug: "self-defense",
      status: "active",
    },
  ],
  loading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action) => {
      const index = state.categories.findIndex(
        (cat) => cat.id === action.payload.id,
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (cat) => cat.id !== action.payload,
      );
    },
    addSubcategory: (state, action) => {
      state.subcategories.push(action.payload);
    },
    updateSubcategory: (state, action) => {
      const index = state.subcategories.findIndex(
        (sub) => sub.id === action.payload.id,
      );
      if (index !== -1) {
        state.subcategories[index] = action.payload;
      }
    },
    deleteSubcategory: (state, action) => {
      state.subcategories = state.subcategories.filter(
        (sub) => sub.id !== action.payload,
      );
    },
  },
});

export const {
  addCategory,
  updateCategory,
  deleteCategory,
  addSubcategory,
  updateSubcategory,
  deleteSubcategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
