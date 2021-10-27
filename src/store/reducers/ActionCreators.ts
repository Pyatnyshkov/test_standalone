import { AppDispatch } from "../index";
import {
  getAcquires,
  getCardTypes,
  getCurrencies,
  getShops
} from "../../helpers/api";
import { setLoading } from "./app";
import { setDetail } from "./details";
import { setShops, setCurrencies, setAcquires, setCardTypes } from "./apiData";

export const fetchShops = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  let shops = await getShops();
  shops = [].concat(shops);
  dispatch(setShops(shops));
  dispatch(setDetail({ name: "shop_id", value: shops[0].id }));
  Promise.all([
    dispatch(fetchCurrencies(shops[0].id)),
    dispatch(fetchAcquires(shops[0].id)),
    dispatch(fetchCardTypes(shops[0].id))
  ]).then(() => dispatch(setLoading(false)));
};

export const fetchCurrencies = (shop: string | number) => async (
  dispatch: AppDispatch
) => {
  let currencies = await getCurrencies(shop);
  currencies = [].concat(currencies);
  dispatch(setCurrencies(currencies));
  dispatch(setDetail({ name: "currency", value: currencies[0].code }));
};

export const fetchAcquires = (shop: string | number) => async (
  dispatch: AppDispatch
) => {
  let acquires = await getAcquires(shop);
  acquires = [].concat(acquires);
  dispatch(setAcquires(acquires));
  dispatch(setDetail({ name: "acquirer", value: acquires[0].code }));
};

export const fetchCardTypes = (shop: string | number) => async (
  dispatch: AppDispatch
) => {
  let cardTypes = await getCardTypes(shop);
  cardTypes = [].concat(cardTypes);
  dispatch(setCardTypes(cardTypes));
  dispatch(setDetail({ name: "acquirer", value: cardTypes[0].code }));
};
