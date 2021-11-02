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
import { formatData } from "../../helpers/formatData";

export const fetchShops = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  let shops = await getShops();
  shops = [].concat(shops);
  shops = formatData.formatShops(shops);
  dispatch(setShops(shops));
  dispatch(setDetail({ name: "shop_id", value: shops[0].value }));
  Promise.all([
    dispatch(fetchCurrencies(shops[0].value)),
    dispatch(fetchAcquires(shops[0].value)),
    dispatch(fetchCardTypes(shops[0].value))
  ]).then(() => dispatch(setLoading(false)));
};

export const fetchCurrencies = (shop: number) => async (
  dispatch: AppDispatch
) => {
  let currencies = await getCurrencies(shop);
  currencies = [].concat(currencies);
  currencies = formatData.formatCurr(currencies);
  dispatch(setCurrencies(currencies));
  dispatch(setDetail({ name: "currency", value: currencies[0].value }));
};

export const fetchAcquires = (shop: number) => async (
  dispatch: AppDispatch
) => {
  let acquires = await getAcquires(shop);
  acquires = [].concat(acquires);
  acquires = formatData.formatAcquires(acquires);
  dispatch(setAcquires(acquires));
  dispatch(setDetail({ name: "acquirer", value: acquires[0].value }));
};

export const fetchCardTypes = (shop: number) => async (
  dispatch: AppDispatch
) => {
  let cardTypes = await getCardTypes(shop);
  cardTypes = [].concat(cardTypes);
  cardTypes = formatData.formatCard(cardTypes);
  dispatch(setCardTypes(cardTypes));
  dispatch(setDetail({ name: "cardType", value: cardTypes[0].value }));
};
