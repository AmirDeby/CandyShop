import * as React from 'react';
import { connect } from 'react-redux';
import { customerCoinsAction, removeItemAction } from '../../actions';
import { IState } from '../../reducer';
import { Product } from '../Product/Product';
import { IProduct } from '../../ProductMudole';

export interface ICellProps {
    customerCoins: number,
    products: IProduct[],
}

interface ICellState {
    txtMessage: Boolean,
}

class _Cell extends React.Component<ICellProps, ICellState> {
    state: ICellState = {
        txtMessage: false,
    }

    public render() {
        const { products } = this.props;
        return (
            <div>
                <Product />
            </div>
        );
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
}

export const Cell = connect(
    mapStateToProps,
    mapDispatchToProps,
)(_Cell)