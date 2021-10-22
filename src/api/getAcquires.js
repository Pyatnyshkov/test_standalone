import axios from "../utils/API";
import { path } from "../utils/api_path";

export const getAcquires = async (shop) => {
    try {
        const response = await axios.post(path.acquires, {shop});
        return response.data.acquires;
    } catch (e) {
        return [
            {
                id: 1,
                name: "Bank of America",
            },
            {
                id: 2,
                name: "Bank of German",
            },
            {
                id: 3,
                name: "Bank of Russia",
            },
        ];
    }
};
