import * as React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { IState } from '../../reducer';

export interface IDisplayProps {
  customerCoins: number,
}

class _Display extends React.Component<IDisplayProps> {
  public render() {
    const { customerCoins } = this.props
    return (
      <div style={{ margin: "10px"}}>
        {customerCoins ? <Alert variant="success"><b>You Can pick a Product</b></Alert> : <Alert variant="danger"><b>Not Enough Money</b></Alert>}
      </div>
    );
  }
}

const mapSteteToProps = (state: IState) => {
  return {
    customerCoins: state.customerCoins,
  }
}

const mapDispatchToProps = {

}

export const Display = connect(
  mapSteteToProps,
  mapDispatchToProps,
)(_Display)