import { Acquire, CardType, Currency, Shop } from "../models/api";

export const formatData = {
  formatShops: (shops: Shop[]) =>
    shops.map(shop => ({
      label: shop.name,
      value: shop.id
    })),

  formatCurr: (currencies: Currency[]) =>
    currencies.map(curr => ({
      label: curr.localization,
      value: curr.code
    })),

  formatCard: (cardTypes: CardType[]) =>
    cardTypes.map(card => ({
      label: card.name,
      value: card.id
    })),

  formatAcquires: (acquires: Acquire[]) =>
    acquires.map(aq => ({
      label: aq.name,
      value: aq.id
    }))
};
