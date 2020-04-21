import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducer';
import { IProduct } from '../../ProductMudole';
import Button from 'react-bootstrap/Button';
import { customerCoinsAction, removeItemAction } from '../../actions';

export interface IProductItemProps {
    product?: IProduct,
    customerCoins?: number,
    updateCustomerCoins?(currentCoins: number): void,
    removeItem?(id: number): void,
}


class _ProductItem extends React.Component<IProductItemProps> {
    public render() {
        const { id, name, picture, price } = this.props.product;
        return (
            <div>
                <div className="product-div" key={id}>
                    <img alt="" style={{ width: "47px" }} src={picture} />
                    <p>{name}</p>
                    <p>Price : {price}</p>
                    <Button size="sm" onClick={this.isBuying} variant="secondary">Buy</Button>
                </div>
            </div>
        );
    }
    isBuying = () => {
        const { customerCoins, updateCustomerCoins, removeItem } = this.props;
        const { id, price } = this.props.product

        if (customerCoins >= price) {
            const currentCoins = customerCoins - price
            removeItem(id);
            updateCustomerCoins(currentCoins);
        } else {
            alert('you do not have Enough Money')
        }
    }
}

const mapStateToProps = (state: IState) => {
    return {
        customerCoins: state.customerCoins,
    }
}

const mapDispatchToProps = {
    updateCustomerCoins: customerCoinsAction,
    removeItem: removeItemAction,
}

export const ProductItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ProductItem)
