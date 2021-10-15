import axios from 'axios';
import {path} from '../utils/api_path';

export async function getShops(language) {
  try {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await response.json();
    return result.data;
  } catch (e) {
    return false;
  }

  try {
    let response = await axios.post(path.shops, {language});
    if (response.data.err === 401) {
      dispatch(
        showNotification({
          status: "error",
          title: "Ошибка",
          message: "Неверный логин или пароль"
        })
      );
    } else {
      setCookie("egotoken", response.data.data.egotoken, {
        "max-age": 24 * 60 * 60
      });
      dispatch(signIn(data.username, response.data.data.resource));
    }
    dispatch(hideLoader());
  } catch (e) {
    if (window.location.hostname === 'localhost') {
      setCookie("egotoken", testAuth.data.egotoken, {
        "max-age": 24 * 60 * 60
      });
      dispatch(signIn(data.username, testAuth.data.resource));
    } else {
      dispatch(
        showNotification({
          status: "error",
          title: "Ошибка",
          message: "Произошла ошибка авторизации. Пожалуйста попробуйте позже."
        })
      );
    }

    dispatch(hideLoader());
  }
}
