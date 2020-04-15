import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { customerCoinsAction, removeItemAction } from '../../actions';
import { IProduct } from '../../ProductMudole';
import { IState } from '../../reducer';

export interface IProductProps {
  products?: IProduct[],
  customerCoins: number,
  updateCustomerCoins(currentCoins: number): void,
  removeItem(id: number): void,
}


class _Product extends React.Component<IProductProps> {

  public render() {
    const { products, customerCoins } = this.props
    return (
      <div>
        {products.map(product =>
          <div key={product.id}>
            <img style={{ width: "40px" }} src={product.picture} />
            <p>{product.name}</p>
            <p>Price : {product.price}</p>
            <Button size="sm" onClick={this.isBuying} variant="secondary">Buy</Button>
          </div>
        )}
        <p style={{ margin: "17px 15px" }}>You have {customerCoins} NIS</p>
      </div>
    );
  }
  isBuying = () => {
    const { customerCoins, updateCustomerCoins, removeItem } = this.props;

    if (customerCoins >= 5) {
      const currentCoins = customerCoins - 5
      updateCustomerCoins(currentCoins);
    }
  }
}

const mapSteteToProps = (state: IState) => {
  return {
    products: state.products,
    customerCoins: state.customerCoins,
  }
}

const mapDispatchToProps = {
  updateCustomerCoins: customerCoinsAction,
  removeItem: removeItemAction
}


export const Product = connect(
  mapSteteToProps,
  mapDispatchToProps,
)(_Product)
