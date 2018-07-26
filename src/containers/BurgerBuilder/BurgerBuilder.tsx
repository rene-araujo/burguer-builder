import * as React from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';


const INGREDIENT_PRICES = {
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
    salad: 0.5
};

class BurgerBuilder extends React.Component {

    public state = {
        ingredients: {
            bacon: 0,
            cheese: 0,
            meat: 0,
            salad: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    public updatePurchaseState(ingredients: any) {

        const totalSum: number = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({ purchasable: totalSum > 0 });
    }

    public addIngredientHandler = (type: string) => {

        const oldCount: number = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    public removeIngredientHandler = (type: string) => {

        const oldCount: number = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    public purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    private purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    public purchaseContinueHandler = () => {
        alert('You continue!');
    }

    public render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (const key in disabledInfo) {
            if (disabledInfo[key] <= 0) {
                disabledInfo[key] = true;
            }
            else {
                disabledInfo[key] = false;
            }
        }

        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        continueHandler={this.purchaseContinueHandler}
                        cancelHandler={this.purchaseCancelHandler}
                        totalPrice={this.state.totalPrice} />
                </Modal>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchaseHandler={this.purchaseHandler} />
            </>
        );
    }
}

export default BurgerBuilder;