import * as React from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
    public render() {
        return (
            <>
                <Burger />
                <div>Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;