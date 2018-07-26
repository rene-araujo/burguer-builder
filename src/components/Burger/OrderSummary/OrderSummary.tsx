import * as React from 'react';
import Button from '../../UI/Button/Button';

interface IProps {
    ingredients: any;
    continueHandler: any;
    cancelHandler: any;
    totalPrice: number;
}
const orderSummary = (props: IProps) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.cancelHandler}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continueHandler}>CONTINUE</Button>
        </>
    );
}

export default orderSummary;