import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducer';
import { getProductsAction } from '../../actions';
import { IProduct } from '../../ProductMudole';

export interface IProductProps {
  products?: IProduct[],
}


class _Product extends React.Component<IProductProps> {

  public render() {
    const { products } = this.props
    return (
      <div>
        {products.map(product =>
          <div key={product.id}>
            <img style={{ width: "40px" }} src={product.picture} />
            <p>{product.name}</p>
            <p>Price : {product.price}</p>
          </div>
        )}
      </div>
    );
  }
}

const mapSteteToProps = (state: IState) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = {

}


export const Product = connect(
  mapSteteToProps,
  mapDispatchToProps,
)(_Product)
