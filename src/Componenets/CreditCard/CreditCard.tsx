import * as React from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { IState } from '../../reducer';
import Button from 'react-bootstrap/Button';
import { checkCreditCardAction } from '../../actions';
import { IAprrovedCreditCard } from '../../cardModule';


export interface ICreditCardProps {
    aprrovedCreditCardNumbers?: IAprrovedCreditCard[],
    checkCreditCard?(amout:number): void,
}

interface ICreditCardState {
    creditCardNumber: string,
    text: boolean,
}

class _CreditCard extends React.Component<ICreditCardProps, ICreditCardState> {
    state: ICreditCardState = {
        creditCardNumber: "",
        text: false
    }
    public render() {
        const { text } = this.state
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Control onChange={this.handlerChange} style={{ width: "90%", padding: "5px", margin: "auto", marginTop: "7px" }} size="sm" type="number" placeholder="****-****-**" />
                    <Button style={{ margin: "7px" }} type="submit" size="sm">Swipe Card</Button>
                </Form.Group>
                {text ? <div style={{ color: "red" }}> Approved </div> : ""}
            </Form>
        );
    }

    handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        console.log(this.state);
        this.setState({
            creditCardNumber: value
        });
    }

    onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { creditCardNumber, text } = this.state;
        const { aprrovedCreditCardNumbers, checkCreditCard } = this.props;

        const result = aprrovedCreditCardNumbers.find(cardNumber => cardNumber.number === creditCardNumber);
        console.log(result);
        
        if (result) {
            checkCreditCard(result.amount);
            this.setState({
                text: true
            })
        }

    }
}

const mapStateToProps = (state: IState) => {
    return {
        aprrovedCreditCardNumbers: state.aprrovedCreditCardNumbers,
        customerCoins: state.customerCoins
    }
}


const mapDispatchToProps = {
    checkCreditCard: checkCreditCardAction,
}

export const CreditCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(_CreditCard)
