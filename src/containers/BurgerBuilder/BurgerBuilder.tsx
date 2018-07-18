import * as React from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {

    public state = {
        ingredients: {
            bacon: 0,
            cheese: 0,
            meat: 0,
            salad: 0
        }
    }

    public render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;