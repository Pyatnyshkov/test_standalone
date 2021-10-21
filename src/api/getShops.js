import axios from "../utils/API";
import { path } from "../utils/api_path";

export const getShops = async () => {
	if (typeof window !== "undefined" && window.location.hostname === 'localhost') {
		return [
			{
	            "id": 19672,
	            "name": "ADMIN-OFFICE, WWW.ADMIN-OFFICE.RU"
	        },
	        {
	            "id": 12954,
	            "name": "aebrus"
	        },
	        {
	            "id": 13654,
	            "name": "aebrus_newjur"
	        },
	        {
	            "id": 16894,
	            "name": "aeroport.ru"
	        },
	        {
	            "id": 13418,
	            "name": "aerovostok"
	        },
	        {
	            "id": 13794,
	            "name": "ag777"
	        },
	        {
	            "id": 346,
	            "name": "Agent.ru"
	        },
	        {
	            "id": 14259,
	            "name": "agentbrand"
	        },
	        {
	            "id": 43,
	            "name": "Akbars Aero"
	        },
	        {
	            "id": 16895,
	            "name": "aksima"
	        },
	        {
	            "id": 14534,
	            "name": "albooka"
	        },
	        {
	            "id": 10394,
	            "name": "alcantara.ru"
	        },
	        {
	            "id": 16194,
	            "name": "alexfitness"
	        }
		]
	} else {
		const response = await axios.post(path.shops);
		return response.data.data;

	}
};
