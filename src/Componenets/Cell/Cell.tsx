import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { IState } from '../../reducer';
import { Product } from '../Product/Product';
import { customerCoinsAction, removeItemAction } from '../../actions';
import { IProduct } from '../../ProductMudole';

export interface ICellProps {
    customerCoins: number,
    updateCustomerCoins(currentCoins: number): void,
    products: IProduct[],
    removeItem(id: number): void,
}

interface ICellState {
    txtMessage: Boolean,
    // currentCoins: number
}

class _Cell extends React.Component<ICellProps, ICellState> {
    state: ICellState = {
        txtMessage: false,
    }

    public render() {
        const { customerCoins } = this.props
        return (
            <div style={{ border: "solid black", width: "200px", height: "230px", padding: "7px", margin: "10px", float: "left", marginBottom: "17px" }}>
                <div>
                    <div>
                        <Product />
                    </div>
                    <Button onClick={this.isBuying} size="sm" variant="dark" >Buy</Button>
                </div>
                <p style={{ margin: "17px 15px" }}>You have {customerCoins} NIS</p>
            </div>
        );
    }

    isBuying = () => {
        const { customerCoins, updateCustomerCoins, products,removeItem } = this.props;
        
        if (customerCoins >= 5) {
            const currentCoins = customerCoins - 5
            updateCustomerCoins(currentCoins);
        }
    }
}

const mapStateToProps = (state: IState) => {
    return {
        customerCoins: state.customerCoins,
        products: state.products,
    }
}

const mapDispatchToProps = {
    updateCustomerCoins: customerCoinsAction,
    removeItem: removeItemAction
}

export const Cell = connect(
    mapStateToProps,
    mapDispatchToProps,
)(_Cell)