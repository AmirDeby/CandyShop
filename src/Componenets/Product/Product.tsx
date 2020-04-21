import * as React from 'react';
import { connect } from 'react-redux';
import { customerCoinsAction, getProductsSqlAction, removeItemAction } from '../../actions';
import { IProduct } from '../../ProductMudole';
import { IState } from '../../reducer';
import "../Product/Product.css";
import { ProductItem } from '../ProductItem/ProductItem';
import NoProductsToshow from '../NoProductsToshow/NoProductsToshow';
import Loader from '../Loader/Loader';


export interface IProductProps {
  products?: IProduct[],
  customerCoins: number,
  updateCustomerCoins(currentCoins: number): void,
  removeItem(id: number): void,
  getSqlProducts(): void,
  isLoading?: Boolean,
}

class _Product extends React.Component<IProductProps> {
  componentDidMount() {
    const { getSqlProducts } = this.props;
    getSqlProducts()
  }

  public render() {
    const { products, customerCoins, isLoading } = this.props;
    if (isLoading) {
      return <Loader />
    }
    if (!products.length) {
      return <NoProductsToshow />
    }
    return (
      <div >
        {products.map((product) =>
          <div style={{ float: "left" }} key={product.id}>
            <ProductItem product={product} />
          </div>
        )}
        <p style={{ textDecoration: "bold", display: "block" }}>
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
    isLoading: state.isLoading,
  }
}

const mapDispatchToProps = {
  updateCustomerCoins: customerCoinsAction,
  removeItem: removeItemAction,
  getSqlProducts: getProductsSqlAction
}


export const Product = connect(
  mapSteteToProps,
  mapDispatchToProps,
)(_Product)
