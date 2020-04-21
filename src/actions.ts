import { ActionType, IAction } from "./reducer"
import { Dispatch } from "react";
import axios from 'axios';

export const checkCreditCardAction = (amout:number) => {
    return {
        type: ActionType.CheckSuccess,
        payload: amout
    }
}

export const removeItemAction = (id: number) => {
    // console.log(id);
    return {
        type: ActionType.RemoveItem,
        payload: id
    }
}

export const customerCoinsAction = (inisitalBalance: number) => {
    // console.log(inisitalBalance);
    return {
        type: ActionType.CustomerCoins,
        payload: inisitalBalance
    }
}

export const getProductsSqlAction = () => {
    return async (dispatch: Dispatch<IAction>) => {
        dispatch({
            type: ActionType.GetProductsPending,
            payload: {}
        });
        try {
            const response = await axios.get('http://localhost:5000/products');
            console.log(response.data);

            dispatch({
                type: ActionType.GetProductsSuccess,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: ActionType.GetProductsFail,
                payload: e
            })
        }
    }

}

export const getProductsAction = () => {
    return {
        type: ActionType.GetProducts,
        payload: {}
    }
}