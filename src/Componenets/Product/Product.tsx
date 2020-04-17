import * as React from 'react';
import { connect } from 'react-redux';
import { customerCoinsAction, removeItemAction } from '../../actions';
import { IProduct } from '../../ProductMudole';
import { IState } from '../../reducer';
import "../Product/Product.css";
import { ProductItem } from '../ProductItem/ProductItem';


export interface IProductProps {
  products?: IProduct[],
  customerCoins: number,
  updateCustomerCoins(currentCoins: number): void,
  removeItem(id: number): void,
}

class _Product extends React.Component<IProductProps> {

  public render() {
    const { products, customerCoins } = this.props;
    return (
      <div >
        {products.map((product) =>
          <div style={{ float: "left" }} key={product.id}>
              <ProductItem product={product} />
            </div>
        )}
        <p style={{ textDecoration: "bold" }}>
          <u><b>You have Left : {customerCoins} NIS</b></u>
        </p>
      </div>
    );
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
