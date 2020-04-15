import { ActionType } from "./reducer"

export const removeItemAction = (id: number) => {
    console.log(id);
    return {
        type: ActionType.GetProducts,
        payload: id
    }
}

export const customerCoinsAction = (inisitalBalance: number) => {
    console.log(inisitalBalance);
    return {
        type: ActionType.CustomerCoins,
        payload: inisitalBalance
    }
}

export const getProductsAction = () => {
    return {
        type: ActionType.GetProducts,
        payload: {}
    }
}