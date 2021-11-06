export interface AppState {
  user: string;
  language: string;
  isLoading: boolean;
  currentStep: string;
  showSend: boolean;
  notify: Notify;
  sendType: string;
}

export interface Notify {
  type: string;
  title: string;
  text: string;
}
