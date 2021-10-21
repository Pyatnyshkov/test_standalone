import axios from "axios";
import { store } from "../store";
import { showNotification } from "../store/actions/app";
import I18n from 'i18n-js';

let baseURL, deviceWidth, deviceHeight;
if (typeof window !== "undefined") {
  baseURL = `${window.location.origin}/send_link/vtb/api`;
  deviceWidth = window.innerWidth;
  deviceHeight = window.innerHeight;
}
const instance = axios.create({
  baseURL,
  headers: {
    deviceWidth,
    deviceHeight,
  },
});

instance.interceptors.request.use(
  (request) => {
    request.data = {
      ...request.data,
      language: store.getState().app.language,
    };
    return request;
  },
  (error) => {
    store.dispatch(showNotification({
      type: 'error',
      title: I18n.t(`error ${1000} title`),
      text: I18n.t(`error ${1000} text`)
    }));
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.error) {
      store.dispatch(showNotification({
        type: 'error',
        title: I18n.t(`error ${response.data.error} title`),
        text: I18n.t(`error ${response.data.error} text`)
      }));
    }
    return response;
  },
  (error) => {
    store.dispatch(showNotification({
      type: 'error',
      title: I18n.t('error 404 title'),
      text: I18n.t('error 404 text')
    }));
    return Promise.reject(error);
  }
);

export default instance;
