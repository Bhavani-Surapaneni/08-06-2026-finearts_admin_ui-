import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  general: {
    siteName: "DancePlatform Admin",
    logo: null,
    contactEmail: "admin@danceplatform.com",
    contactPhone: "+1-555-ADMIN",
    address: "123 Platform Street, Tech City, TC 12345",
  },
  payment: {
    gateway: "stripe",
    stripePublicKey: "pk_test_...",
    stripeSecretKey: "sk_test_...",
    currency: "USD",
    taxRate: 10,
  },
  social: {
    facebook: "https://facebook.com/danceplatform",
    instagram: "https://instagram.com/danceplatform",
    twitter: "https://twitter.com/danceplatform",
    youtube: "https://youtube.com/@danceplatform",
  },
  email: {
    smtpHost: "smtp.gmail.com",
    smtpPort: 587,
    smtpUser: "notifications@danceplatform.com",
    smtpPassword: "********",
    senderName: "DancePlatform",
  },
  seo: {
    metaTitle: "DancePlatform - Learn Dance, Music, Karate & More",
    metaDescription:
      "Book online classes for dance, music, karate, yoga and more. Expert trainers, flexible schedules.",
    keywords: "dance, music, karate, yoga, online classes, training",
  },
  security: {
    requireEmailVerification: true,
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordMinLength: 8,
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateGeneralSettings: (state, action) => {
      state.general = { ...state.general, ...action.payload };
    },
    updatePaymentSettings: (state, action) => {
      state.payment = { ...state.payment, ...action.payload };
    },
    updateSocialSettings: (state, action) => {
      state.social = { ...state.social, ...action.payload };
    },
    updateEmailSettings: (state, action) => {
      state.email = { ...state.email, ...action.payload };
    },
    updateSeoSettings: (state, action) => {
      state.seo = { ...state.seo, ...action.payload };
    },
    updateSecuritySettings: (state, action) => {
      state.security = { ...state.security, ...action.payload };
    },
  },
});

export const {
  updateGeneralSettings,
  updatePaymentSettings,
  updateSocialSettings,
  updateEmailSettings,
  updateSeoSettings,
  updateSecuritySettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
