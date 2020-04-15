import * as React from 'react';
import { connect } from 'react-redux';
import { customerCoinsAction, removeItemAction } from '../../actions';
import { IState } from '../../reducer';
import { Product } from '../Product/Product';

export interface ICellProps {
    customerCoins: number,
    
}

interface ICellState {
    txtMessage: Boolean,
}

class _Cell extends React.Component<ICellProps, ICellState> {
    state: ICellState = {
        txtMessage: false,
    }

    public render() {
        const { customerCoins } = this.props
        return (
            <div style={{ border: "solid black", width: "200px", height: "260px", padding: "7px", margin: "10px", float: "left", marginBottom: "17px" }}>
                <div>
                    <div>
                        <Product />
                    </div>
                </div>
               
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