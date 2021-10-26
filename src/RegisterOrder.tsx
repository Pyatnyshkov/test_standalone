import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store";

export default function RegisterOrder() {
  return (
    <Provider store={store}>
      <App show_send={false} language={'ru'}/>
    </Provider>
  );
}