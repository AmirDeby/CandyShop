import * as React from 'react';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { IState } from '../../reducer';
import { customerCoinsAction } from '../../actions';

export interface ICoinSlotProps {
    customerCoinsStatus?(inisitalBalance: number): void,
}

interface ICoinSlotState {
    inisitalBalance: number,
}

class _CoinSlot extends React.Component<ICoinSlotProps, ICoinSlotState> {
    state = {
        inisitalBalance: 0,
    }
    public render() {
        const { inisitalBalance } = this.state
        return (
            <div style={{ border: "solid black 2px" ,margin:"10px"}}>
                <h4 style={{ margin: "10px 10px" }}><u>Amount</u></h4>
                <div>
                    <b> {inisitalBalance}</b>
                </div>
                <Button onClick={this.onClickFiveHandler} style={{ margin: "10px" }} size="sm">5 NIS</Button>
                <Button onClick={this.onClickTenHandler} style={{ margin: "10px" }} size="sm">10 NIS</Button>
                <Button onClick={this.onClickRegretHandler} style={{ margin: "10px" }} size="sm" variant="danger">Coins Out</Button>
                <div style={{ margin: "12px" }}>
                    <Button onClick={this.onSendMonenyHandler} size="sm" variant="outline-success">Send Money</Button>
                </div>
            </div>
        );
    }
    onSendMonenyHandler = () => {
        const { customerCoinsStatus } = this.props;
        const { inisitalBalance } = this.state;

        customerCoinsStatus(inisitalBalance)
    }
    onClickFiveHandler = () => {
        const { inisitalBalance } = this.state;
        this.setState({
            inisitalBalance: inisitalBalance + 5
        })
    }
    onClickTenHandler = () => {
        const { inisitalBalance } = this.state;
        this.setState({
            inisitalBalance: inisitalBalance + 10
        })
    }
    onClickRegretHandler = () => {
        const { inisitalBalance } = this.state;
        this.setState({
            inisitalBalance: inisitalBalance - inisitalBalance
        })
    }
}
const mapStateToProps = (state: IState) => {
    return {

    }
}

const mapDispatchToProps = {
    customerCoinsStatus: customerCoinsAction,
}

export const CoinSlot = connect(
    mapStateToProps,
    mapDispatchToProps
)(_CoinSlot)