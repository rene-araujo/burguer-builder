import * as React from 'react';
import BuildControl from './BuildControl/BuildControl';
import * as classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

interface IProps {
    ingredientAdded: (type: string) => void;
    ingredientRemoved: (type: string) => void;
    disabled: object;
    price: number;
}

const buildControls = (props: IProps) => {

    const onIngredientAdded = (type: string) => () => props.ingredientAdded(type);
    const onIngredientRemoved = (type: string) => () => props.ingredientRemoved(type);

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={onIngredientAdded(ctrl.type)}
                    removed={onIngredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />))}
        </div>

    )
}

export default buildControls;