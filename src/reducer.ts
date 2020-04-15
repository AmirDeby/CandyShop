import { IProduct } from "./ProductMudole";

export interface IState {
    customerCoins: number,
    products: IProduct[],
}

export interface IAction {
    type: string;
    payload: any;

}


const initialState: IState = {
    customerCoins: 0,
    products: [
        { id: 1, name: "Cola Zero", price: 5, picture: "https://cocacola.co.il/celebratemusic/src/assets/images/cans/zero-empty.png" },
        { id: 2, name: "Zero Cola", price: 5, picture: "https://cocacola.co.il/celebratemusic/src/assets/images/cans/zero-empty.png" }
    ]
}

export enum ActionType {
    CustomerCoins = "CUSTOMER_COINS",
    GetProducts = "GET_PRODUCTS",
    RemoveItem = "REMOVE_ITEM"
}

export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {

        case ActionType.GetProducts: {
            return {
                ...state,
            }
        }

        case ActionType.RemoveItem: {
            const itemId = action.payload; 

            return {
                ...state,
                // products: , 
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