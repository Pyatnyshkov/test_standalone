import {useAppSelector} from "./redux-hooks";






export const FormatData = () => {
    const {shops, currencies, cardTypes, acquires } = useAppSelector(state => state.apiData)

    const formatShops = shops.map(shop => ({
        label: shop.name,
        value: shop.id
    }))



    const formatCurr = currencies.map(curr => ({
        label: curr.code,
        value: curr.localization

    }))

    const formatCard = cardTypes.map(card => ({
        label: card.name,
        value: card.id
    }))

    const aq = acquires.map(aq => ({
        label: aq.name,
        value: aq.id
    }))

}