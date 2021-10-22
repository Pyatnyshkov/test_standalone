import axios from "../utils/API";
import { path } from "../utils/api_path";

export const getCurrencies = async (shop) => {
	try {
		const response = await axios.post(path.currencies, {shop});
		return response.data.currencies.LocalizedEntity;
	} catch (e) {
		return [
			{
                "code": "RUB",
                "localization": "РУБ"
            },
            {
                "code": "UAH",
                "localization": "ГРН"
            },
            {
                "code": "USD",
                "localization": "ДОЛ"
            },
            {
                "code": "KZT",
                "localization": "КЗТ"
            },
            {
                "code": "EUR",
                "localization": "ЕВР"
            },
            {
                "code": "GEL",
                "localization": "ГЕЛ"
            }
		]
	}
};
