import axios from 'axios';

let baseURL, deviceWidth, deviceHeight;
if (typeof window !== "undefined") {
  baseURL = window ? `${window.location.origin}/send_link/vtb/api` : undefined;
  deviceWidth = window.innerWidth;
  deviceHeight = window.innerHeight
}
const instance =  axios.create({
  baseURL,
  headers: {
    deviceWidth,
    deviceHeight
  }
});

export default instance;