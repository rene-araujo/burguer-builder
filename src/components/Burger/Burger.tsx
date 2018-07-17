import * as React from 'react';
import * as classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// interface IProps {
//     children: any;
// }

const burger = () => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    )

}

export default burger;