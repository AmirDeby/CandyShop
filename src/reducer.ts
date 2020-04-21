import { IProduct } from "./ProductMudole";
import { IAprrovedCreditCard } from "./cardModule";

export interface IState {
    customerCoins: number,
    products: IProduct[],
    isLoading: boolean,
    aprrovedCreditCardNumbers: IAprrovedCreditCard[],
    aprroved: boolean,
}

export interface IAction {
    type: string;
    payload: any;
}


const initialState: IState = {
    customerCoins: 0,
    products: [],
    isLoading: false,
    aprrovedCreditCardNumbers: [
        { number: "4580101320", amount: 50 },
        { number: "4580101321", amount: 20 },
        { number: "4580101322", amount: 100 },
        { number: "4580101323", amount: 35 },
    ],
    aprroved: false
}

export enum ActionType {
    CustomerCoins = "CUSTOMER_COINS",
    GetProducts = "GET_PRODUCTS",
    RemoveItem = "REMOVE_ITEM",
    GetProductsSuccess = "GET_PRODUCTS_SUCCESS",
    GetProductsPending = "GET_PRODUCTS_PENDING",
    GetProductsFail = "GET_PRODUCTS_FAIL",
    CheckSuccess = "CHECK_SUCCES",
    CheckedFail = "CHECKED_FAIL",
}

export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {

        case ActionType.CheckSuccess: {
            return {
                ...state,
                aprroved: true,
                customerCoins: action.payload
            }
        }

        case ActionType.GetProductsFail: {
            return {
                ...state,
                isLoading: false,
                products: []
            }
        }

        case ActionType.GetProductsPending: {
            return {
                ...state,
                isLoading: true
            }
        }

        case ActionType.GetProductsSuccess: {
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        }

        case ActionType.RemoveItem: {
            const itemId = action.payload;
            const products = state.products.concat();
            const productIndex = products.findIndex(product => product.id === itemId);
            products.splice(productIndex, 1)

            return {
                ...state,
                products,
            }
        }

        case ActionType.CustomerCoins: {
            return {
                ...state,
                customerCoins: action.payload
            }
        }

        default: {
            return state;
        }
    }
}