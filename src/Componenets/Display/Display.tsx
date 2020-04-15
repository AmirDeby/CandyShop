import * as React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { IState } from '../../reducer';

export interface IDisplayProps {
  customerCoins: number,
}

interface IDisplayState {
  buy: boolean,
}

class _Display extends React.Component<IDisplayProps, IDisplayState> {
  state = {
    buy: false,
  }



  public render() {
    const { customerCoins } = this.props
    return (
      <div style={{ margin: "20px" }}>
        {customerCoins ? <Alert variant="success">You Can pick a Product</Alert> : <Alert variant="info"><b>Not Enough Money</b></Alert>}
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