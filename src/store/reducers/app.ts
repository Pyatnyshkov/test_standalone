import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import I18n from "i18n-js";
import ru from "../../i18n/ru.json";
import en from "../../i18n/en.json";

import { AppState, Notify } from "../../models/app";

I18n.translations["en"] = en;
I18n.translations["ru"] = ru;

const initialState: AppState = {
  user: "",
  language: "",
  isLoading: true,
  currentStep: "",
  showSend: false,
  sendType: 'link',
  notify: {} as Notify
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
      I18n.locale = state.language;
    },
    changeLanguage(state) {
      state.language === "en"
        ? (state.language = "ru")
        : (state.language = "en");
      I18n.locale = state.language;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setCurrentStep(state, action: PayloadAction<string>) {
      state.currentStep = action.payload;
    },
    showSend(state) {
      state.showSend = true;
    },
    setNotify(state, action: PayloadAction<Notify>) {
      state.notify = action.payload;
    },
    setSendType(state, action: PayloadAction<string>) {
      state.sendType = action.payload;
    }
  }
});

export const {
  setLanguage,
  setLoading,
  setCurrentStep,
  showSend,
  setNotify,
  changeLanguage,
  setUser,
  setSendType
} = appSlice.actions;
export default appSlice.reducer;
