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
        // { id: 2, name: "Zero Cola", price: 5.5, picture: "https://cocacola.co.il/celebratemusic/src/assets/images/cans/zero-empty.png" },
        { id: 4, name: "Coffee Zero", price: 3.5, picture: "https://cbcsales.co.il/wp-content/uploads/2019/09/7290110112264-500x700.png" },
        { id: 3, name: "Coffee Zero", price: 3.5, picture: "https://cocacola.co.il/img/products/cocacola/cola-zero/gallery/zero-11.jpg" },
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
            const products = state.products.concat();
            const productIndex = products.findIndex(product => product.id === itemId);
            products.splice(productIndex, 1)
            // console.log(products);
            // console.log(productIndex);
            // console.log(currentProducts);
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