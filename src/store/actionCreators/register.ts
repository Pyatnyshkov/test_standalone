import { store } from "../index";

export const register = () => {
    console.log('send register');
    const data = store.getState();
    console.log(data)
};