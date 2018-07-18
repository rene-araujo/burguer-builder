import * as React from 'react';
import * as classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

interface IProps {
    ingredients: any;
}

const burger = (props: IProps) => {

    let transformedIngredients: JSX.Element[] | JSX.Element = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey]).fill('')].map((_, key) => {
                return (<BurgerIngredient key={igKey + key} type={igKey} />);
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );

}

export default burger;