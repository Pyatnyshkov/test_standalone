import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AppState {
    language: string;
    isLoading: boolean;
    currentStep: string;
    showSend: boolean;
    notify: Notify;
}

export interface Notify {
    type: string;
    title: string;
    text: string;
}

const initialState: AppState = {
    language: '',
    isLoading: false,
    currentStep: '',
    showSend: false,
    notify: {} as Notify,
};

const appSlice = createSlice( {
    name: 'app',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload
        },
        changeLanguage(state) {
            state.language === 'en' ? state.language = 'ru' : state.language = 'en'
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setCurrentStep(state, action: PayloadAction<string>) {
            state.currentStep = action.payload
        },
        showSend(state) {
            state.showSend = true;
        },
        setNotify(state, action: PayloadAction<Notify>) {
            state.notify = action.payload;
            setTimeout(() => {setNotify(initialState.notify)}, 3000)
        }
    }
});

export const {setLanguage, setLoading, setCurrentStep, showSend, setNotify, changeLanguage} = appSlice.actions;
export default appSlice.reducer

