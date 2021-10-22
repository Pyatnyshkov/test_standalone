import axios from "../utils/API";
import { path } from "../utils/api_path";

export const getCardTypes = async (shop) => {
    try {
        const response = await axios.post(path.cardTypes, {shop});
        return response.data.cardTypes;
    } catch (e) {
        return [
            {
                id: 1,
                name: "Mastercard",
            },
            {
                id: 2,
                name: "Visa",
            },
            {
                id: 3,
                name: "Maestro",
            },
        ];
    }
};
